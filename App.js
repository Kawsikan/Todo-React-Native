import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';
import Main from './components/Main';
import Splash from './components/Splash';

const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash} 
          options={{ title: 'Splash' }} />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ title: 'Welcome' }} />

      </Stack.Navigator>
    </NavigationContainer>
    // <Main />
  );
};

export default App