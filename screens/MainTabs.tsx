import { View, Text , StyleSheet} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import Home from './Home';
import NewHabits from './navigation/NewHabits';
import Settings from './navigation/Settings';
import Analysis from './navigation/Analysis';


const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor: '#181818'}
        }}>
             <Tab.Screen name="Home" component={Home} 
                        options={{
                          tabBarIcon:({focused,}) =>
                            <Entypo name="home" size={24} color={focused ? '#B2FD42' : '#B3B3B3'} />
                        }}/>
            <Tab.Screen name="NewHabis" component={NewHabits} 
                        options={{
                          tabBarIcon:({focused,}) =>
                            <Entypo name="add-to-list" size={24} color={focused ? '#B2FD42' : '#B3B3B3'} />
                        }}/>
            <Tab.Screen name="Analysis" component={Analysis} options={{
                          tabBarIcon:({focused,}) =>
                            <SimpleLineIcons name="graph" size={24} color={focused ? '#B2FD42' : '#B3B3B3'} />
                        }}/>
            <Tab.Screen name="Settings" component={Settings} options={{
                          tabBarIcon:({focused,}) =>
                            <Ionicons name="settings" size={24} color={focused ? '#B2FD42' : '#B3B3B3'} /> 
                        }}/>
            
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  navigationContainer:{

  }
})