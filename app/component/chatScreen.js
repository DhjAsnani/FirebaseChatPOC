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

    addData(sender_id, sender_name, msg_text) {

        ref.add(
            {
                'text': msg_text,
                'createdAt': new Date(Date.now()).getTime(),
                'user': {
                    '_id': sender_id,
                    'name': sender_name
                }
            }
        ).then(() => {
            console.log(text, 'added')
        }
        )
    }

    loadData() {
        var msg_object = []

        ref.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
            msg_object = []
            this.setState({ messages: msg_object })


            querySnapshot.forEach(doc => {

                var objj = {
                    '_id': doc.id,
                    'text': doc.data().text,
                    'createdAt': doc.data().createdAt,
                    'user': {
                        '_id': doc.data().user._id,
                        'name': doc.data().user.name
                    }

                }

                msg_object.push(objj)

                this.setState({ messages: msg_object })
            }
            )
        })





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



    doPOSTAction(text_msg) {
        // fetch('https://fcm.googleapis.com/v1/projects/rn-chat-dhj/messages:send', {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ya29.c.Kp0B4gcs-kUKFePcjpFH6ZKSr78nTWN6bYME4QREoYeyrps0kTlotlokMgJSrNMUli2QiDC-bl8x5SjwJkKvFLQ_jPwkOQz-C6rWnMEqGQcUGjz0vSD67vY-dT8RMCoCxzC7L1BikfXRxXF7O6y9NAdm4CUYeghFZkkWy21wrDFWYJuSJflgcqzxh5jG6Vd5ftqUmEJgRVHS1wz75AyEeQ'
        //     },
        //     body: JSON.stringify({
        //         topic: 'topic1'
        //     })
        // });

        // var dataa = {
        //     topic: 'topic1',
        //     notification: {
        //         body:text_msg,
        //         title:'New Chat Message'
        //     }
        // }

        var dataa = {
            topic: 'topic1',
            data: {
                name: 'dheeraj'
            },
            notification: {
                body: text_msg,
                title: 'New Chat Message'
            }
        }

        var message = {
            message: dataa
        }

        console.log(message)

        fetch('https://fcm.googleapis.com/v1/projects/rn-chat-dhj/messages:send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ya29.c.Kp0B5AdU053zErVu5B6QLyPHU2V5c_vY_iZ8A74bz4-T8nQ14qVz3xrOHzYLDflTU1U4cnxgXORlybh0uvZUFFmAIEhsJGAS4LTgqwDJOBDJcF3lC6u0lRrBlgt_cbZ9-mv2943SzPlcSTEYkXhlezKtKx8j5eCm8kelfSD4eZRPhidJhyQeVOwFGnSxi29b_vMKsiEF9s5nEKNJZYQaIQ'
            },
            body: JSON.stringify(message)
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                // this.setState({
                //     data: responseJson
                // })
            })
            .catch((error) => {
                console.error(error);
            });

        console.log("POSTING DATA")
    }

    onSend(messages = []) {

        var notification_text = messages[0].user.name + " : " + messages[0].text
        this.doPOSTAction(notification_text);
        this.addData(messages[0].user._id, messages[0].user.name, messages[0].text)
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
            <View style={{ flex: 1 }}>
                {/* {this.doSomeAction()} */}
                <GiftedChat
                    messages={this.state.messages}
                    // renderAvatar={() => null}
                    onSend={this.onSend}
                    renderBubble={this.renderBubble}
                    user={{
                        _id: 9,
                        name: "Dheeraj"
                    }}
                />

            </View>
        );
    }
}

