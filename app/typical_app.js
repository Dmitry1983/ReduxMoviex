import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const App = () => {
  return (
    <SafeAreaView style={styles.savContainer}>
      <View style={styles.container}>
        <Text style={styles.text} >Hello</Text>
      </View>
    </SafeAreaView>
  )
}


export default App


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  savContainer: {
    flex: 1,
  }
})