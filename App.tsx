import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainTabs from './screens/MainTabs';
import Home from './screens/Home';
import Settings from './screens/navigation/Settings';
import NewHabits from './screens/navigation/NewHabits';
import Analysis from './screens/navigation/Analysis';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen options={{headerShown: false}} name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
      

    </NavigationContainer>
    
  );
}

export default App;
