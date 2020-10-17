/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import firestore from '@react-native-firebase/firestore';

// const usersCollection = firestore().collection('Users');

class App extends React.Component{
  constructor(props)
  {
    super(props);
  }

  doSomeAction()
  {
    // console.log(usersCollection);
    return <Text>Hiii</Text>
  }

  render()
  {
    return(
      <View>
        <Text>We are almost fucked up!!</Text>
        {this.doSomeAction()}
      </View>
    )
  }
}

export default App;
