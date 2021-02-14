import React from 'react'
import {View,StatusBar,Text} from 'react-native'

export default class SettingScreen extends React.Component{
    render(){
      return(
        <View  style={{flex:1,backgroundColor:'#161324'}}>
          <Text style={{alignSelf:"center",marginTop:400,color:'#fff'}}>Setting Screen</Text>
        </View>
      );
    }
  }
//  class VoiceScreen{};