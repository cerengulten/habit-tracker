import { View, Text, SafeAreaView, ScrollView, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import { Colors } from 'C:/Users/crnyl/Desktop/ReactNativeProjects/habit-tracker/constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigatorParamsList} from 'C:/Users/crnyl/Desktop/ReactNativeProjects/habit-tracker/App';
 // images
import Gym from '../../assets/images/Gym.jpeg';
import Eating from '../../assets/images/healthyeating.jpeg';
import Meditation from '../../assets/images/meditation.jpeg';
import Journal from '../../assets/images/journaling.jpeg';
import Reading from '../../assets/images/reading.jpeg';
import Skincare from '../../assets/images/skincare.jpeg';
import Cleaning from '../../assets/images/cleaning.jpeg';
 

export default function NewHabits() {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigatorParamsList>>();
  const habitsData =[
    {id:'1', emoji: '🤸🏻‍♂️', title: 'Do Exercise', backgroundImage: Gym },
    {id: '2', emoji: '🥗', title: 'Eat Healthy', backgroundImage: Eating},
    {id: '3', emoji: '🧘🏻‍♀️', title: 'Meditation', backgroundImage: Meditation},
    {id: '4', emoji: '📓', title: 'Journaling', backgroundImage: Journal},
    {id: '5', emoji: '📚', title: 'Reading', backgroundImage: Reading},
    {id: '6', emoji: '🧴', title: 'Skincare Routine', backgroundImage: Skincare},
    {id: '7', emoji: '🧹', title: 'Cleaning', backgroundImage: Cleaning},
  ];

  const HabitListItem =({emoji, title, backgroundImage}) =>(
    
      <TouchableOpacity style={styles.habitlistContainer} onPress={() => navigation.navigate('HabitFrequency', {emoji, title, backgroundImage})}>
        <Text style={{fontSize: 30, paddingBottom: 5, paddingRight: 10}}>{emoji}</Text>
        <Text style={{fontFamily: 'mainfont', color: Colors.secondary, fontSize: 20,paddingBottom: 5}}>{title}</Text>
      </TouchableOpacity>
   
   ) ;
  return (
    <View  style={{flex:1, backgroundColor: '#121212'}}>
      <SafeAreaView>
        <Text style={styles.mainText}>Habits</Text>
      </SafeAreaView>
      <TouchableOpacity style={styles.customizehabitContainer}>
        <Text style={styles.customizehabitButton}>Customize Your New Habit</Text>
        <MaterialIcons name="playlist-add" size={24} color='#404040' />
      </TouchableOpacity>
      
        <FlatList data = {habitsData} 
                  renderItem ={({item}) => <HabitListItem title={item.title} emoji={item.emoji} backgroundImage={item.backgroundImage}/>} 
                  keyExtractor={item => item.id}  />
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainText:{
    marginLeft: 20,
    marginTop: 10,
    fontFamily: 'mainfont', 
    fontSize: 35, 
    color: Colors.primarytext,
  },
  customizehabitContainer:{
    flexDirection: 'row',
    height: 20,
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15,
    marginBottom: 20
  },
  customizehabitButton:{
    fontFamily: 'mainfont',
    fontSize: 20,
    color: '#404040',
  },
  habitlistContainer:{
    flexDirection: 'row', 
    alignItems: 'center',
    paddingBottom: 10,
    paddingTop: 10,
    marginHorizontal: 10, 
    borderBottomColor: '#404040', 
    borderBottomWidth: 0.5
  },

})