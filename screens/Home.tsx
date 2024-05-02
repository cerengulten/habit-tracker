import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native'; 
import React, {useState, useEffect} from 'react'; 
import { Entypo, AntDesign } from '@expo/vector-icons';
import { Colors } from '../constants/Colors';
import { Font} from '../constants/Font';

const {width, height} = Dimensions.get('screen');
type EntypoIconName = "emoji-happy" | "emoji-neutral" | "emoji-sad";
export default function Home() {

  const [dateBoxes, setDateBoxes] = useState([]);
  const [emojiSelection, setEmoji] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState<EntypoIconName>('emoji-happy');
  const [selectedDateIndex, setSelectedDateIndex] = useState<number>(null);

  const handleEmojiSelection = (index) => {
    setSelectedDateIndex(index);
    setEmoji(true);
  };

  const handleEmojiClick = (emojiName) => {
    const newDateBoxes = [...dateBoxes];
    const updatedDateBox =  (
      <View style={styles.dateContainer} key={selectedDateIndex}>
        <View style={styles.dateBox}>
          <Text style={styles.dateText}>{formatDate(new Date())}</Text>
        </View>
        <TouchableOpacity onPress={() => handleEmojiSelection(selectedDateIndex)}>
          <Entypo name={emojiName} size={26} color={emojiName === 'emoji-happy' ? Colors.lime : (emojiName === 'emoji-neutral' ? Colors.purple : Colors.lovelyred)} style={styles.emoji} />
        </TouchableOpacity>
      </View>
    );
    newDateBoxes[selectedDateIndex] = updatedDateBox;
    setDateBoxes(newDateBoxes);
    setSelectedEmoji(emojiName);
    setEmoji(false);
  };

  useEffect(() => {
    // Function to generate date boxes for the next 10 days
    const generateDateBoxes = () => {
      const currentDate = new Date();
      const boxes = [];
      for (let i = 0; i < 10; i++) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);
        const formattedDate = formatDate(date);
        boxes.push(
          <View style={styles.dateContainer} key={i}>
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>{formattedDate}</Text>
              </View>
              <TouchableOpacity onPress={() => handleEmojiSelection(i)}>
                <Entypo name={selectedEmoji} size={26} color={Colors.secondary} style={styles.emoji} />
              </TouchableOpacity>
          </View>
        );
      }
      return boxes;
    };

    setDateBoxes(generateDateBoxes());
  }, []);

  const formatDate = (date:Date):string => {
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const weekday = date.toLocaleString('default', { weekday: 'short' });

    return `${day} ${month}, ${weekday}`;
  };



  return (
    <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} style={{flex:1, backgroundColor: '#121212', }}>
      <SafeAreaView style={{flex:0, height: 100}}>
        <View style ={styles.containerBox}>
          <Text style={styles.mainText}>Hi, Evergreen!</Text>
        </View>
      </SafeAreaView>
      <View style={{flex:1}}>
        <View style={{height:170}}>
          <ScrollView horizontal={true} alwaysBounceHorizontal={true} style={styles.calendarContainer} 
                      showsHorizontalScrollIndicator={false}>
            <View style={{flexDirection: 'row'}}>
              {dateBoxes}
            </View>
          </ScrollView>
        </View>
        <View style={styles.dailyContainer}>
          <Text style ={styles.mainText}>Daily Check-in</Text>
          <TouchableOpacity>
            <Entypo name="plus" size={24} color= {Colors.secondary} />
          </TouchableOpacity>
        </View>
        <View style={styles.todoContainer}>
          <Text style={styles.mainText}>To-Do List</Text>
        </View>
      </View>
      <Modal
        transparent={true}
        animationType="none"
        visible={emojiSelection}
        onRequestClose={handleEmojiSelection}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={handleEmojiSelection} style={{alignItems: 'flex-end'}}>
              <AntDesign name="close" size={24} color={Colors.primarytext} />
            </TouchableOpacity>
            <Text style={{color: Colors.primarytext, fontSize: 30, marginTop: 15, marginLeft: 5}}>
              How you feeling today?
            </Text>
            <View style={{flex:1, flexDirection: 'row', justifyContent: 'space-around', alignItems:'center', marginBottom:30}}>
            <TouchableOpacity onPress={() => handleEmojiClick('emoji-happy')}>
              <Entypo name="emoji-happy" size={40} color={selectedEmoji === 'emoji-happy' ? Colors.lime : Colors.secondary}  />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEmojiClick('emoji-neutral')}>
              <Entypo name="emoji-neutral" size={40} color={selectedEmoji === 'emoji-neutral' ? Colors.purple : Colors.secondary} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleEmojiClick('emoji-sad')}>
              <Entypo name="emoji-sad" size={40} color={selectedEmoji === 'emoji-sad' ? Colors.lovelyred : Colors.secondary} />
            </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>
      


      
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    mainText:{
      marginLeft: 10,
      fontFamily: 'mainfont', 
      fontSize: 35, 
      color: Colors.primarytext
    },
    containerBox:{
      width: '100%',
      height: 50,
      paddingLeft: 20,
      marginTop: 10,
    },
    calendarContainer:{
      height: 50,
      marginVertical: 10,
      marginTop: 15,
    },
    dateContainer: {
      alignItems: 'center',
      height: 30,
    },
    dateBox: {
      borderColor: Colors.secondary ,
      borderWidth: 1.3,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      margin: 5,
      borderRadius: 10, 
      height: 80,
      width: 85, 
    },
    dateText: {
      color: Colors.primarytext,
      fontSize: 18,
      textAlign: 'center'
    },
    emoji: {
      marginTop: 5, 
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    
    },
    modalContent: {
      backgroundColor: Colors.backgroundsecondary,
      padding: 20,
      borderRadius: 10,
      height: height*0.35,
      width: width*0.80,
    },
    dailyContainer:{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      width: '100%',
      paddingHorizontal: 10,
      height: 200
    },
    todoContainer:{
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems:'center',
      alignContent: 'center',
      width: '100%',
      paddingHorizontal: 10,
    }
})