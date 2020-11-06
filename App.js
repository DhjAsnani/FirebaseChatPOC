import React, { Component, useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions, NavigationActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { fcmService } from './app/Notification/FCMService';
import { localNotificationService } from './app/Notification/LocalNotificationService';


import { StyleSheet, View, Text, StatusBar, Button } from 'react-native';

import { Colors, } from 'react-native/Libraries/NewAppScreen';

import ChatScreen from './app/component/chatScreen.js'

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification)
  }, [])

  const onRegister = (token) => {
    console.log("[App] Token", token);
  }

  const onNotification = (notify) => {
    // console.log("[App] onNotification", notify);
    const options = {
      soundName: 'default',
      playSound: true,
    }

    localNotificationService.showNotification(
      0,
      notify.data.name,
      notify.data.name,
      notify,
      options,
    )
  }

  const onOpenNotification = async (notify) => {

    console.log('notify', notify);
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          title: false
        }}
      >
        <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerTitle: 'Chat', headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;