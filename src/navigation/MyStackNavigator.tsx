import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import { StackParams } from '../types/StackNavigator';
import { SectionDetails } from '../screens/Movie/components/sections/SectionDetails/SectionDetails';
import { colors } from '../constants/colors';

const Stack = createNativeStackNavigator<StackParams>();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNav"
      screenOptions={{
        headerStyle: { backgroundColor: colors.black },
        headerTintColor: colors.primary,
        headerTitleStyle: { fontWeight: '600', fontSize: 18 },
        headerBackTitle: 'Back',
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: colors.background,
        },
      }}
    >
      <Stack.Screen
        name="TabNav"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SectionDetails"
        component={SectionDetails}
        options={({ route }) => ({
          title: route.params?.title || 'Movies',
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default MyStackNavigator;
