import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movie/Movies';
import Search from '../screens/Search/Search';
import Wishlist from '../screens/Wishlist/Wishlist';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';
import { TAB_ICONS, tabOptions } from './tabOptions';
import { Profile } from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...tabOptions,
        tabBarIcon: ({ color, size }) => {
          const iconName = TAB_ICONS[route.name] as any;

          return (
            <FontAwesome6
              name={iconName || 'circle-question'}
              size={size}
              color={color}
              iconStyle="solid"
            />
          );
        },
      })}
    >
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
