import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navigation from './src/navigation/Navigation'
import FlashMessage from 'react-native-flash-message'
import { AuthProvider } from './src/screen/authcontext/Authcontext'

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthProvider>


        {/* <StatusBar backgroundColor={"#004E8C"} />s */}
        <Navigation />
        <FlashMessage position={"top"} />
      </AuthProvider>
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({})