import { View, Text, StyleSheet, SafeAreaView, Button, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from 'C:/Users/crnyl/Desktop/ReactNativeProjects/habit-tracker/constants/Colors';
import EmojiSelector, { Categories } from 'react-native-emoji-selector';

const CustomHabit = () => {
  return (
    <View style={{flex:1, backgroundColor: Colors.backgroundbase}}>
      <SafeAreaView style={{flex:0, height: 300}}>
          <Text style={styles.header}>What do you want to add your life as a habit?</Text>
      </SafeAreaView>
      <TouchableOpacity>
      <EmojiSelector
        category={Categories.symbols}
        onEmojiSelected={emoji => console.log(emoji)}/>
    </TouchableOpacity>
    </View>
  )
}

export default CustomHabit

const styles = StyleSheet.create({
  header:{
    marginLeft: 20,
    marginTop: 100,
    color: Colors.lovelyred ,
    textAlign: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    width: '80%',
    
  },
})