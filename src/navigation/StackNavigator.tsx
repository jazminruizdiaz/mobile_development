import { SectionDetails } from '../screens/Movie/components/sections/SectionDetails/SectionDetails';
import Movies from '../screens/Movie/Movies';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackParams } from '../types/StackNavigator';

const Stack = createNativeStackNavigator<StackParams>();

export function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Movies" component={Movies} />
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
}
