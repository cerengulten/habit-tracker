import { View, Text,SafeAreaView } from 'react-native'
import React from 'react'

export default function Settings() {
  return (
    <View style={{flex:1, backgroundColor: '#121212'}}>
      <SafeAreaView style={{flex:1}}>
        <Text>Settings</Text>
      </SafeAreaView>
    </View>
  )
}