import React, { useMemo, useState } from 'react';
import { View, Image, Switch, ScrollView, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Button } from '../../components/atoms/Button/Button';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { styles } from './styles';
import { useWishlist } from '../../contexts/Wishlist/WishlistContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StackParams } from '../../types/StackNavigator';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';
import { useThemedColors } from '../../hooks/useThemedColors';
import { useTheme } from '../../contexts/Theme/ThemeContext';
import { useGenres } from '../../hooks/useGenre';
import { MovieItem } from '../Movie/components/items/MovieItem';

export const Profile = () => {
  const { wishlist, clearWishList } = useWishlist();
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const { data, loading } = useGenres(true);
  const genres = data?.genres ?? [];
  const colors = useThemedColors();

  const user = useMemo(
    () => ({
      name: 'John Doe',
      email: 'john.doe@example.com',
      profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
    }),
    [],
  );

  const favoriteGenre = useMemo(() => {
    if (wishlist.length === 0 || genres.length === 0) return null;

    const genreCount: Record<number, number> = {};

    wishlist.forEach(movie => {
      movie.genre_ids?.forEach(id => {
        genreCount[id] = (genreCount[id] || 0) + 1;
      });
    });

    const sorted = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);
    const [genreId, count] = sorted[0] || [];

    const genreName = genres.find(g => g.id === Number(genreId))?.name;

    return genreName ? { id: Number(genreId), name: genreName, count } : null;
  }, [wishlist, genres]);

  const averageRating = useMemo(() => {
    if (wishlist.length === 0) return 0;
    const total = wishlist.reduce((sum, movie) => sum + movie.vote_average, 0);
    return (total / wishlist.length).toFixed(1);
  }, [wishlist]);

  const genreVariety = useMemo(() => {
    const uniqueId = new Set<number>();
    wishlist.forEach(movie => {
      movie.genre_ids?.forEach(id => uniqueId.add(id));
    });
    return uniqueId.size;
  }, [wishlist]);

  const handleGoToWishlist = () => {
    navigation.navigate('Wishlist');
  };


  const { toggleThemeMode, themeMode } = useTheme();
  const moviesInWishlist = useMemo(() => wishlist.length, [wishlist]);

  const isDark = themeMode === "dark";
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      <ScreenHeader title="Profile" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: user.profilePicture }}
              style={styles.avatar}
              resizeMode="cover"
            />
          </View>
          <TextCustom style={styles.name}>{user.name}</TextCustom>
          <TextCustom style={styles.email}>{user.email}</TextCustom>
        </View>
        <View style={styles.section}>
          <TextCustom style={styles.sectionTitle}>Wishlist Stats</TextCustom>
          <View style={styles.statsRow}>
            <View style={[styles.statCard, { backgroundColor: colors.backgroundLight }]}>
              <TextCustom style={[styles.statNumber, { color: colors.primary }]}>
                {moviesInWishlist}
              </TextCustom>
              <TextCustom style={[styles.statLabel, { color: colors.textSecondary }]}>Wishlist Movies</TextCustom>
            </View>

            <View style={[styles.statCard, { backgroundColor: colors.backgroundLight }]}>
              <TextCustom style={[styles.statNumber, { color: colors.primary }]}>
                {averageRating || 0}
              </TextCustom>
              <TextCustom style={[styles.statLabel, { color: colors.textSecondary }]}>Avg Rating</TextCustom>
            </View>

            <View style={[styles.statCard, { backgroundColor: colors.backgroundLight }]}>
              <TextCustom style={[styles.statNumber, { color: colors.primary }]}>{genreVariety}</TextCustom>
              <TextCustom style={[styles.statLabel, { color: colors.textSecondary }]}>Genres Movies</TextCustom>
            </View>
          </View>
        </View>
        <View style={styles.section}>
          <TextCustom style={styles.sectionTitle}>Quick Actions</TextCustom>
          <Button
            title="My Wishlist"
            onPress={handleGoToWishlist}
            variant="primary"
            style={styles.button}
            textStyle={styles.buttonText}
          />
          <Button
            title="Clear Wishlist"
            variant="primary"
            onPress={clearWishList}
            style={styles.button}
            textStyle={styles.buttonText}
          />
          <Button
            title="Logout"
            variant="third"
            onPress={() => console.log('logout')}
            style={styles.buttonLogout}
            textStyle={styles.buttonText}
          />
        </View>

        <View style={styles.section}>
          <TextCustom style={styles.sectionTitle}>Appearance</TextCustom>
          <View style={styles.toggleRow}>
            <TextCustom style={styles.toggleLabel}>Dark Mode</TextCustom>
            <Switch
              value={isDark}
              onValueChange={toggleThemeMode}
              trackColor={{
                false: colors.buttonSecondary,
                true: colors.primary,
              }}
              thumbColor={isDark ? colors.primary : colors.white}
            />
          </View>
        </View>
        {wishlist.length > 0 && (
          <View style={styles.section}>
            {favoriteGenre && (
              <View style={styles.favoriteGenreSection}>
                <View style={styles.containerFav}>
                  <TextCustom style={styles.sectionTitle}>
                    Favorite Genre:
                  </TextCustom>
                  <TextCustom style={[styles.subSectionSubtitle, { color: colors.primary }]}>
                    {favoriteGenre.name} Movies
                  </TextCustom>
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={wishlist.filter(movie =>
                    movie.genre_ids?.includes(favoriteGenre.id),
                  )}
                  keyExtractor={movie => movie.id.toString()}
                  renderItem={({ item }) => (
                    <View style={styles.movieCardSmall}>
                      <MovieItem
                        movie={item}
                        style={styles.moviePosterSmall}
                        showToggle={false}
                      />
                    </View>
                  )}
                />
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};