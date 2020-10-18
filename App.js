import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { StyleSheet, View, Text, StatusBar, Button } from 'react-native';

import { Colors, } from 'react-native/Libraries/NewAppScreen';

import ChatScreen from './app/component/chatScreen.js'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          title: false
        }}
      >
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{headerTitle: 'Chat', headerShown: false}} />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;