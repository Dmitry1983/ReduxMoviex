import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import Home from './app/containers/Home';
import mockMovies from './app/mockMovies'

function moviesReducer(state = mockMovies.Search, action) {
  return store
}
const store = createStore(moviesReducer)




export default () => (
  <SafeAreaView style={styles.savContainer}>

    <Provider store={store}>
      <Home />
    </Provider>

  </SafeAreaView>
);



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
