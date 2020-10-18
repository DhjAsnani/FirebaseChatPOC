import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';

const ref = firestore().collection('giftchattest2');

export default class ChatScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            messages: [
                
            ]
            
        };
        this.loadData()
        this.onSend = this.onSend.bind(this);
    }

    addData(sender_id,sender_name,msg_text)
    {
        
      ref.add(
        {
          'text':msg_text,
          'createdAt': new Date( Date.now() ).getTime(),
          'user':{
              '_id':sender_id,
              'name':sender_name
          }
        }
      ).then( ()=>
        {
          console.log(text, 'added')
        }
      )
    }

    loadData()
    {
        var msg_object = []
        console.log("--------------0---------------");
        ref.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
            msg_object = []
            this.setState({messages:msg_object})
            console.log("---------------------1------------------");
            console.log(msg_object)
            querySnapshot.forEach(doc=>{
            //   console.log(doc.data())
              var objj = {
                  '_id':doc.id,
                  'text':doc.data().text,
                  'createdAt':doc.data().createdAt,
                  'user':{
                      '_id':doc.data().user._id,
                      'name':doc.data().user.name
                  }

              }

              msg_object.push(objj)
              console.log("---------------------2------------------");
              console.log(msg_object)
              this.setState({messages:msg_object})
            }
              )
          })

          console.log(msg_object)
        
          
          
    }
    // UNSAFE_componentWillMount() {
        
    //     this.setState({
    //         messages: [
    //             {
    //                 _id: 1,
    //                 text: 'Write your message',
    //                 createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    //                 user: {
    //                     _id: 2,
    //                     name: 'Saransh Talwar',
    //                 },
    //             },
    //             {
    //                 _id: 2,
    //                 text: 'Yo Biatch',
    //                 createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    //                 user: {
    //                     _id: 3,
    //                     name: 'Dheeraj Asnani (Ad)',
    //                 },
    //             },
    //             {
    //                 _id: 3,
    //                 text: 'John Doe is gone for now',
    //                 createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
    //                 user: {
    //                     _id: 4,
    //                     name: 'Chetan mann (Tr)',
    //                 },
    //             },
    //         ],
    //     });
    // }

    renderBubble = (props) => {
        return (
            <View>
                <Text>{props.currentMessage["user"]["name"]}</Text>
                <Bubble {...props} />
            </View>
        )
    }

    doSomeAction()
    {
        console.log(this.state.messages)
    }

    onSend(messages = []) {
        // console.log(messages[0].user._id)
        
        this.addData(messages[0].user._id,messages[0].user.name,messages[0].text)
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }
    render() {
        return (
            // <View >

            //     <Text>Hi</Text>
            //     {this.doSomeAction()}
                
            // </View>
            <View style={{flex:1}}>
            {/* {this.doSomeAction()} */}
            <GiftedChat
                    messages={this.state.messages}
                    // renderAvatar={() => null}
                    onSend={this.onSend}
                    renderBubble={this.renderBubble}
                    user={{
                        _id: 8,
                        name:"Chetan"
                    }}
                />

            </View>
        );
    }
}

