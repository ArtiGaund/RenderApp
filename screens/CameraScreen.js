import React, { useState, useEffect } from 'react'
import {View,StatusBar,Text,Alert,Button,StyleSheet, TouchableOpacity} from 'react-native'
import { Camera } from 'expo-camera';


const CameraScreen = () =>{
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
      return(
        <View  style={{flex:1,backgroundColor:'#161324',alignItems: 'center', justifyContent: 'center'}}>
           <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
        </View>
      );
  }
  const styles = StyleSheet.create({
    
    camera: {
      flex: 1,
    },
    buttonContainer: {
      // flex: 1,
      backgroundColor: 'transparent',
      // margin: 20,
    },
    button: {
      flex: 1,
      // alignSelf: 'flex-end',
      // alignItems: 'center',
    },
    text: {
      fontSize: 18,
      color: 'white',
    },
  });
  export default CameraScreen;
