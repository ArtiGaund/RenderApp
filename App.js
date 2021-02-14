import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {FontAwesome5} from '@expo/vector-icons'
import { View ,Text} from 'react-native';
import LocationScreen from './screens/LocationScreen';
import SettingScreen from './screens/SettingScreen';
import HistoryScreen from './screens/HistoryScreen';
import ChatScreen from './screens/ChatScreen';
import CameraButton from './components/CameraButton'
import CameraScreen from './screens/CameraScreen';
const TabNavigator = createBottomTabNavigator(
  {
    Setting:{
      screen: SettingScreen,
      navigationOptions:{
        tabBarIcon: ({focused, tintColor }) => <FontAwesome5 name="sliders-h" size={24} />
      }
    },
    Location:{
      screen: LocationScreen,
      navigationOptions:{
        tabBarIcon: ({focused, tintColor }) => <FontAwesome5 name="map-marker-alt" size={24}/>
      }
    },
    
    Camera:{
      screen: CameraScreen,
      navigationOptions:{
        tabBarIcon: <CameraButton/>
      }
    },
    Chat:{
      screen: ChatScreen,
      navigationOptions:{
        tabBarIcon: ({focused, tintColor }) => <FontAwesome5 name="envelope-open-text" size={24} />
      }
    },
    History:{
      screen: HistoryScreen,
      navigationOptions:{
        tabBarIcon: ({focused, tintColor }) => (<FontAwesome5 name="history" size={24} tintColor/>)}
    },
    
  },
  {
    tabBarOptions:{
      showLabel: false,
      activeTintColor: '#cd077d',
    }
  }
);

export default createAppContainer(TabNavigator);