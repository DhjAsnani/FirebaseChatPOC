/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{ useState, useCallback, useEffect } from 'react';
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

import firestore from '@react-native-firebase/firestore';

// const ref = firestore().collection('todos');

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   addData(text, user)
//   {
//     ref.add(
//       {
//         'text':text,
//         'user':user
//       }
//     ).then( ()=>
//       {
//         console.log(text, 'added for ', user)
//       }
//     )
//   }

//   updateData(docId, text, user)
//   {
//     ref.doc(docId)
//     .add(
//       {
//         'text':text,
//         'user':user
//       }
//     ).then( ()=>
//       {
//         console.log(text, 'updated for', user,'docId',docId)
//       }
//     )
//   }

//   addTodo() {
//     // ref.onSnapshot(querySnapshot => {
//     //   // querySnapshot.forEach(doc => {
//     //   //   const { title, complete } = doc.data();
//     //   //   console.log(title, complete)
//     //   console.log(querySnapshot)
//     //   });

//     // }
//     ref.onSnapshot(querySnapshot => {
      
//       querySnapshot.forEach(doc=>{
//         console.log(doc.data())
//       }
//         )
//     })
// }

//   // doSomeAction()
//   // {
//   //   console.log(usersCollection);
//   //   return <Text>Hiii</Text>
//   // }

//   render() {
//     return (
//       <View>
//         <Text>We are almost fucked up!!</Text>
//         {this.addTodo()}
//       </View>
//     )
//   }
// }



// export default App;
