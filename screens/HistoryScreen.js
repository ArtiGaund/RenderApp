import React from 'react'
import {View,StatusBar,Text} from 'react-native'

export default class HistoryScreen extends React.Component{
    render(){
      return(
        <View  style={{flex:1,backgroundColor:'#161A24'}}>
          <Text style={{alignSelf:"center",marginTop:400,color:'#fff'}}>HistoryScreen</Text>
        </View>
      );
    }
  }
//   export default class HistoryScreen{};