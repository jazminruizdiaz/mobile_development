import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { colors } from '../constants/colors';

export const TAB_ICONS: Record<string, string> = {
  Movies: 'video',
  Home: 'house',
  Search: 'magnifying-glass',
  Wishlist: 'heart',
};

export const tabOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.white,
  tabBarStyle: {
    backgroundColor: colors.black,
    borderTopWidth: 0,
    height: 90,
    paddingBottom: 30,
    paddingTop: 10,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '500',
  },
};
