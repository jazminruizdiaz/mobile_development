import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import type { ThemeColors } from '../constants/colorsFun';

export const TAB_ICONS: Record<string, string> = {
  Home: 'house',
  Search: 'magnifying-glass',
  Wishlist: 'bookmark',
  Profile: 'user',
};

export const getTabOptions = (colors: ThemeColors): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.textPrimary,
  tabBarStyle: {
    backgroundColor: colors.background, 
    borderTopWidth: 0,
    height: 80,
    paddingBottom: 30,
    paddingTop: 5,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '500',
  },
});
