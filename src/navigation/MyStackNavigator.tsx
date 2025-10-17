import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Movies from '../screens/Movie/Movies';
import { SectionDetails } from '../screens/Movie/components/sections/SectionDetails/SectionDetails';
import { StackParams } from '../types/StackNavigator';

const Stack = createNativeStackNavigator<StackParams>();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Movies">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SectionDetails"
        component={SectionDetails}
        options={({ route }) => ({
          title: route.params?.title || 'Movies',
          headerBackTitle: 'Back',
        })}
      />
    </Stack.Navigator>
  );
};

export default MyStackNavigator;
