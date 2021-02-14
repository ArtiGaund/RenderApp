import React from 'react'
import {Alert,View,Text,StyleSheet,TouchableHighlight,Animated} from 'react-native'
import { FontAwesome5,Feather} from '@expo/vector-icons'
import { abs } from 'react-native-reanimated';

export default class CameraButton extends React.Component{
// handlePress = () => {
//     Alert.alert(
//         'You can open camera here!'
//      )
// }

    render(){
        return(
            <View style={{position:"absolute",alignItems:"center"}}>
                <View style={styles.button}>
                    <TouchableHighlight underlayColor="#7F58FF">
                        <Animated.View>
                            <FontAwesome5 name="camera" size={24} color="#FFF"/>
                        </Animated.View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#7F58FF",
        alignItems:"center",
        justifyContent:"center",
        width: 72,
        height: 72,
        borderRadius: 36,
        position:"absolute",
        top: -60,
        shadowColor: "#7F58FF",
        shadowRadius: 5,
        shadowOffset: {height: 10},
        shadowOpacity: 0.3,
        borderWidth: 3,
        borderColor: "#FFF"
    }
});