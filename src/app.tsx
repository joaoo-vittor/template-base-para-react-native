import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text testID="text-base">Test base App</Text>
      <StatusBar style="light" backgroundColor="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
