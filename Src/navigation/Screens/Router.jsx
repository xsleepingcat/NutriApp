import * as React from 'react';
import LoginScreen from "./LoginScreen";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='LoginScreen'/>
        </NavigationContainer>
    )
}