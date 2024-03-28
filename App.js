import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <StatusBar backgroundColor={"#004E8C"} />s */}
      <Navigation />

    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})