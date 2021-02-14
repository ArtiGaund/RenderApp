import React from 'react'
import {View,StatusBar,Text} from 'react-native'
import Translator from '../components/Translator';

export default class ChatScreen extends React.Component{
    render(){
      return(
        <View  style={{flex:1,backgroundColor:'#161924'}}>
          <Translator/>
        </View>
      );
    }
  }