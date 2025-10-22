import React, { useMemo, useState } from 'react';
import { View, Image, Switch, ScrollView, FlatList } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Button } from '../../components/atoms/Button/Button';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { styles } from './styles';
import { useWishlist } from '../../contexts/Wishlist/WishlistContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';
import { StackParams } from '../../types/StackNavigator';
import { ScreenHeader } from '../../components/molecules/ScreenHeader/ScreenHeader';
import { MovieCard } from '../Movie/components/items/MovieCard';
import { useGenres } from '../../hooks/useGenres';

export const Profile = () => {
  const { wishlist, clearWishList } = useWishlist();
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { data, loading } = useGenres(true);
  const genres = data?.genres ?? [];

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

    const genreCount: Record<string, number> = {};

    wishlist.forEach(movie => {
      if (movie.genre && Array.isArray(movie.genre)) {
        movie.genre.forEach(g => {
          genreCount[g.name] = (genreCount[g.name] || 0) + 1;
        });
      }
    });
    const sorted = Object.entries(genreCount).sort((a, b) => b[1] - a[1]);
    const [name, count] = sorted[0] || [];

    return name ? { name, count } : null;
  }, [wishlist, genres]);

  const averageRating = useMemo(() => {
    if (wishlist.length === 0) return 0;
    const total = wishlist.reduce((sum, movie) => sum + movie.vote_average, 0);
    return (total / wishlist.length).toFixed(1);
  }, [wishlist]);

  const genreVariety = useMemo(() => {
    const uniqueGenres = new Set<string>();
    wishlist.forEach(movie => {
      movie.genre?.forEach(g => uniqueGenres.add(g.name));
    });
    return uniqueGenres.size;
  }, [wishlist]);

  const handleGoToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const moviesInWishlist = useMemo(() => wishlist.length, [wishlist]);

  return (
    <SafeAreaView style={styles.container}>
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
          <TextCustom style={styles.sectionTitle}>Quick Actions</TextCustom>
          <Button
            title="My Wishlist"
            onPress={handleGoToWishlist}
            variant="custom"
            style={styles.button}
            textStyle={styles.buttonText}
          />
          <Button
            title="Logout"
            variant="custom"
            onPress={() => console.log('logout')}
            style={styles.button}
            textStyle={styles.buttonText}
          />
          <Button
            title="Clear Wishlist"
            variant="custom"
            onPress={clearWishList}
            style={styles.button}
            textStyle={styles.buttonText}
          />
        </View>

        <View style={styles.section}>
          <TextCustom style={styles.sectionTitle}>Appearance</TextCustom>
          <View style={styles.toggleRow}>
            <TextCustom style={styles.toggleLabel}>Dark Mode</TextCustom>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
              trackColor={{
                false: colors.buttonSecondary,
                true: colors.primary,
              }}
              thumbColor={isDarkMode ? colors.primary : colors.white}
            />
          </View>
        </View>
        {wishlist.length > 0 && (
          <View style={styles.section}>
            <TextCustom style={styles.sectionTitle}>Insights</TextCustom>
            <View style={styles.statsRow}>
              <View style={styles.statCard}>
                <TextCustom style={styles.statNumber}>
                  {moviesInWishlist}
                </TextCustom>
                <TextCustom style={styles.statLabel}>wishlist</TextCustom>
              </View>

              <View style={styles.statCard}>
                <TextCustom style={styles.statNumber}>
                  {averageRating || 0}
                </TextCustom>
                <TextCustom style={styles.statLabel}>Avg Rating</TextCustom>
              </View>

              <View style={styles.statCard}>
                <TextCustom style={styles.statNumber}>
                  {genreVariety}
                </TextCustom>
                <TextCustom style={styles.statLabel}>Genres</TextCustom>
              </View>
            </View>

            {favoriteGenre && (
              <View style={styles.favoriteGenreSection}>
                <TextCustom style={styles.subSectionTitle}>
                  Favorite Genre ⭐
                </TextCustom>
                <TextCustom style={styles.subSectionSubtitle}>
                  {favoriteGenre.name} Movies
                </TextCustom>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={wishlist.filter(movie =>
                    movie.genre?.some(g => g.name === favoriteGenre.name),
                  )}
                  keyExtractor={movie => movie.id.toString()}
                  renderItem={({ item }) => (
                    <View style={styles.movieCardSmall}>
                      <MovieCard
                        posterPath={item.poster_path}
                        style={styles.moviePosterSmall}
                      />
                      <TextCustom
                        numberOfLines={1}
                        style={styles.movieTitleSmall}
                      >
                        {item.title}
                      </TextCustom>
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
