import React, { useMemo, useState } from 'react';
import { View, Image, Switch } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/atoms/Button/Button';
import { TextCustom } from '../../components/atoms/Text/TextCustom';
import { styles } from './styles';
import { useWishlist } from '../../contexts/Wishlist/WishlistContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../constants/colors';

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg',
};

export const Profile = () => {
  const { wishlist } = useWishlist();
  const navigation = useNavigation<any>();
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleGoToWishlist = () => {
    navigation.navigate('Wishlist');
  };

  const moviesInWishlist = useMemo(() => wishlist.length, [wishlist]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TextCustom variant="title" style={styles.headerTitle}>
          Profile
        </TextCustom>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: user.profilePicture }}
            style={styles.avatar}
            resizeMode="cover"
          />
        </View>
        <TextCustom style={styles.name}>{user.name}</TextCustom>
        <TextCustom style={styles.email}>{user.email}</TextCustom>
        <View style={styles.statBadge}>
          <TextCustom style={styles.statBadgeText}>
            {moviesInWishlist} movies in wishlist
          </TextCustom>
        </View>
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
    </SafeAreaView>
  );
};
