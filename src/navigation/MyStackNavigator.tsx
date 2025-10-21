import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabNavigator } from './TabNavigator';
import { StackParams } from '../types/StackNavigator';
import { SeeMore } from '../screens/SeeMore/SeeMore';
import { stackOptions } from './stackOptions';


const Stack = createNativeStackNavigator<StackParams>();

const MyStackNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="TabNav" screenOptions={stackOptions}>
      <Stack.Screen
        name="TabNav"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SeeMore"
        component={SeeMore}
        options={({ route }) => ({
          title: route.params?.title || 'Movies',
          headerShown: true,
        })}
      />
    </Stack.Navigator>
  );
};

export default MyStackNavigator;
