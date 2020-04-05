import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Home from './app/containers/Home';

const App = () => {
  return (
    <SafeAreaView style={styles.savContainer}>
      <Home />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  savContainer: {
    flex: 1,
  },
});
