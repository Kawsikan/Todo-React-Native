import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';
import Main from './components/Main';
import Splash from './components/Splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const App = () => {


  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="Splash"
    //       component={Splash} 
    //       options={{ title: 'Splash' }} />
    //     <Stack.Screen
    //       name="Main"
    //       component={Main}
    //       options={{ title: 'Welcome' }} />

    //   </Stack.Navigator>
    // </NavigationContainer>
    // <Main />
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Splash" component={Splash} />
        <Tab.Screen name="Main" component={Main} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App