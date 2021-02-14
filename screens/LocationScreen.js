import React from 'react';
import {View,StatusBar,Text,StyleSheet, Platform} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {FontAwesome5} from '@expo/vector-icons'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const mapDarkStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#242f3e"
      }
    ]
  },
  {
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#263c3f"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6b9a76"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#38414e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#212a37"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9ca5b3"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#746855"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#1f2835"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#f3d19c"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2f3948"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#d59563"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#515c6d"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#17263c"
      }
    ]
  }
]

export default class LocationScreen extends React.Component{
    
    constructor(props){
      super(props);
      this.state = {
        latitude : 0,
        longitude : 0,
        error : null,
      };
    }

    componentDidMount(){
      navigator.geolocation.getCurrentPosition( position => {
        this.setState({
           latitude : position.coords.latitude,
           longitude : position.coords.longitude,
           error : null,
        });
      }, error => this.setState({ error : error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 2000}
      );
    }

    render(){
      return(
        <View  style={styles.container}>
              <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapDarkStyle}
          region={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
            <Marker coordinate={this.state}/>
          </MapView>
          <View style={styles.searchBox}>
              <TextInput
                placeholder="Search here"
                placeholderTextColor="#000"
                autoCapitalize="none"
                style={{flex:1,padding:0}}
              />
              <FontAwesome5 name="search" size={24}/>
          </View>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      marginTop: 30,
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
    searchBox:{
      position : 'absolute',
      marginTop : Platform.OS === 'ios'? 40 : 10,
      flexDirection : 'row',
      backgroundColor : '#fff',
      width : '90%',
      alignSelf : 'center',
      borderRadius : 5,
      padding : 10,
      shadowColor : '#ccc',
      shadowOffset : { width : 0, height : 3},
      shadowOpacity : 0.5,
      shadowRadius : 5,
      elevation : 10,
    },
   });