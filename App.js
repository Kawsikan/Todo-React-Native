import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';
import Main from './components/Main';
import Splash from './components/Splash';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

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