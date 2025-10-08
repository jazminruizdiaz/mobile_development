import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './styles';

export const Home = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.headerText}>Home Page</Text>
      </View>

      <View>
        <Text style={styles.insetInfo}>Top: {insets.top}</Text>
        <Text style={styles.insetInfo}>Bottom: {insets.bottom}</Text>
        <Text style={styles.insetInfo}>Left: {insets.left}</Text>
        <Text style={styles.insetInfo}>Right: {insets.right}</Text>
      </View>

      <View style={[styles.footer, { marginBottom: insets.bottom }]}>
        <Text style={styles.footerText}>Digital Academy - 2025</Text>
      </View>
    </View>
  );
};
