/*import * as React from 'react'; */
import React, { Component } from 'react';
import {SafeAreaView, View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTab} from './Src/navigation/BottomTab';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './Src/navigation/Screens/LoginScreen';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
    ); 
  }
}
