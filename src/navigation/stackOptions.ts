import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';

export const stackOptions: NativeStackNavigationOptions = {
  headerStyle: { backgroundColor: colors.black },
  headerTintColor: colors.primary,
  headerTitleStyle: { fontWeight: '600', fontSize: 18 },
  headerBackTitle: 'Back',
  headerShadowVisible: false,
  contentStyle: {
    backgroundColor: colors.background,
  },
};
