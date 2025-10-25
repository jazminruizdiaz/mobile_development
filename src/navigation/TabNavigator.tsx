import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useMemo } from 'react';
import Movies from '../screens/Movie/Movies';
import Wishlist from '../screens/Wishlist/Wishlist';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { TAB_ICONS, getTabOptions } from './tabOptions';
import { Search } from '../screens/Search/Search';
import { Profile } from '../screens/Profile/Profile';
import { useThemedColors } from '../hooks/useThemedColors';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  const colors = useThemedColors();
  const tabOptions = useMemo(() => getTabOptions(colors), [colors]);
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...tabOptions,
        tabBarIcon: ({ color, size, focused }) => {
          const iconName = TAB_ICONS[route.name] as any;
          const iconStyle =
            route.name === 'Wishlist'
              ? focused
                ? 'solid'
                : 'regular'
              : 'solid';

          return (
            <FontAwesome6
              name={iconName || 'circle-question'}
              size={size * 0.75}
              color={color}
              iconStyle={iconStyle}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Movies} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
