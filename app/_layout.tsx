import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import DrawerNavigator from './DrawerNavigator';

export default function App() {
  return (
    <>
      <View style={styles.overlay}>
        <NavigationContainer independent={true}>
          <DrawerNavigator />
        </NavigationContainer>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
