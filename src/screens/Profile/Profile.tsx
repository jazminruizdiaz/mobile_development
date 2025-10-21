import React, { useMemo } from 'react';
import { View, Image, Switch } from 'react-native';
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

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

export const Profile = () => {
  const { wishlist } = useWishlist();
  const navigation = useNavigation<NavigationProp<StackParams>>();
  const colors = useThemedColors();

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

      <View style={styles.profileSection}>
        <View
          style={[
            styles.avatarContainer,
            { borderColor: colors.primary },
          ]}
        >
          <Image
            source={{ uri: user.profilePicture }}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
        <TextCustom style={[styles.name, { color: colors.textPrimary }]}>
          {user.name}
        </TextCustom>
        <TextCustom style={[styles.email, { color: colors.textSecondary }]}>
          {user.email}
        </TextCustom>
        <View
          style={[styles.statBadge, { backgroundColor: colors.buttonSecondary }]}
        >
          <TextCustom style={[styles.statBadgeText, { color: colors.textPrimary }]}>
            {moviesInWishlist} movies in wishlist
          </TextCustom>
        </View>
      </View>

      <View style={styles.section}>
        <TextCustom style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          Quick Actions
        </TextCustom>
        <Button
          title="My Wishlist"
          onPress={handleGoToWishlist}
          variant="custom"
          style={[styles.button, { backgroundColor: colors.primary }]}
          textStyle={[styles.buttonText, { color: colors.textDark }]}
        />
        <Button
          title="Logout"
          variant="custom"
          onPress={() => console.log('logout')}
          style={[styles.button, { backgroundColor: colors.primary }]}
          textStyle={[styles.buttonText, { color: colors.textDark }]}
        />
      </View>

      <View style={styles.section}>
        <TextCustom style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          Appearance
        </TextCustom>
        <View
          style={[styles.toggleRow, { backgroundColor: colors.backgroundLight }]}
        >
          <TextCustom style={[styles.toggleLabel, { color: colors.textPrimary }]}>
            Dark Mode
          </TextCustom>
          <Switch
            value={isDark}
            onValueChange={toggleThemeMode}
            trackColor={{
              false: colors.buttonSecondary,
              true: colors.primary,
            }}
            thumbColor={ colors.primary}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};