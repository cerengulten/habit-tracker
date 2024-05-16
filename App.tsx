import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import MainTabs from './screens/MainTabs';
import HabitFrequency from './screens/HabitFrequency';


export type RootStackNavigatorParamsList = {
  MainTabs: undefined;
  HabitFrequency: { emoji: string; title: string };
  
};

const Stack = createStackNavigator<RootStackNavigatorParamsList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen options={{headerShown: false}} name="MainTabs" component={MainTabs} />
        <Stack.Screen options={{headerShown: false}} name="HabitFrequency" component={HabitFrequency} />
      </Stack.Navigator>
      

    </NavigationContainer>
    
  );
}

export default App;
