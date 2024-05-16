import { View, Text, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity, Switch, Button } from 'react-native'
import React, {useState} from 'react'
import { Colors } from 'C:/Users/crnyl/Desktop/ReactNativeProjects/habit-tracker/constants/Colors';
import { useRoute } from '@react-navigation/native'; 
import DateTimePicker from '@react-native-community/datetimepicker';

const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const {width, height} = Dimensions.get('screen');
export default function HabitFrequency({ route }) {
  const { emoji, title } = route.params;
  const [isEnabled, setIsEnabled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };


  return (
    <View style={{flex:1, backgroundColor: '#121212'}}>
      <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent: 'center',marginTop: 100, width: width*0.9}}>
        <Text style={styles.mainText}>{emoji}</Text>
        <Text style={styles.mainText}>{title}</Text>
      </View>
      <View style={styles.habitboxContainer}>
        <View style={styles.habitBox}>
          <Text style={styles.habitboxHeader}>Set Up your habit preferences</Text>
          <View style={styles.periodicityContainer}>
            <Text style={styles.habitboxsubTitle}>Set periodicity</Text>
            <View style={styles.weekCircles}>
            {daysOfWeek.map((day, index) => (
              <TouchableOpacity key={index} style={styles.dayCircle}>
                <Text>{day}</Text>
              </TouchableOpacity>
            ))}
            </View>
          </View>
          <View style={styles.reminderContainer}>
            <Text style={styles.habitboxsubTitle}>When should we remind you?</Text>
            <Switch trackColor={{false: '#767577', true: '#B286FD'}}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={{transform: [{ scaleX: .7 }, { scaleY: .7 }]}}/>
          </View>
          {isEnabled && 
          <View>
          <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode="time"
                is24Hour={true}
                onChange={onChange}
                display="spinner"
                style= {styles.timePicker}
              />
              <Button title='Set'/>
          </View>}
        </View>
        
      </View>
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
  habitboxContainer:{
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'center',
  },
  habitBox:{
    flexDirection: 'column',
    height: height*2/4,
    width: width*0.9,
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 15,
    paddingTop: 25
  },
  habitboxHeader:{
    fontFamily: 'mainfont',
    fontWeight: 'bold',
    fontSize: 20,
    color: Colors.lovelyred,
    alignSelf: 'center',
  },
  periodicityContainer:{
    marginTop: 20,
    height: 140,
    justifyContent: 'space-evenly',
    
  },
  habitboxsubTitle:{
    fontFamily: 'mainfont',
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.lovelyred,
  },
  weekCircles:{
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -7

  },
  dayCircle:{
    height: 50,
    width: 50,
    borderRadius: 25,
    borderColor: Colors.purple,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0.8,
  },
  reminderContainer:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timePicker:{
    width: 250,
    height: 125,
    alignSelf: 'center'
  }
})