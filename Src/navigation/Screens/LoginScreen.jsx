/*import * as React from 'react';*/
import React, { Component } from 'react';
import {Text, View, Button, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { useNavigation } from '@react-navigation/native';


export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            username: '',
            password: '',
        }
    }
        
        _signIn = async (token) => {
            await AsyncStorage.setItem('userToken', token);
            this.props.navigation.navigate('App');
        }

        _login = () => {
            if(this.state.username == ''){
                Alert.alert('Aviso', 'Favor de introducir usuario');
            }else if(this.state.password == ''){
                Alert.alert('Aviso', 'Favor de introducir contraseña');
            }else{
                fetch('https://nutriapp-backend.onrender.com/api/auth/login',{
                    method: 'POST',
                    headers:{
                        Accept: 'application/json',
                        'Content-Type':'application/json',
                    },
                    body: JSON.stringify({
                        username: this.state.username,
                        password: this.state.password,
                    }),
                }).then((response) => response.json())
                .then((responseJson) =>{
                    if(responseJson.hasOwnProperty('token')){
                        this._signIn(responseJson.token);
                    }else if(responseJson.hasOwnProperty('non_field_errors')){
                        Alert.alert('Error', 'Ha ocurrido un error. Intente de nuevo');
                        
                    }
                })
            }
        }

    render(){
        return (
            <View style={styles.background}>
                <View style={styles.container}></View>
                    <Text style={styles.Email}>
                        Email 
                    </Text>  
                    <View style={styles.campoEmail}>
                        <TextInput placeholder='HealthBeat@gmail.com' placeholderTextColor={"#9D9D9D"} style={styles.user} autoCapitalize='none' onChangeText={(username) =>this.setState({username})} />
                    </View>     
                        <Text style={styles.word}>       
                            Contraseña
                        </Text>
                        <View style={styles.campoPassword}>
                            <TextInput placeholder='SpicyJaibita1' placeholderTextColor={"#9D9D9D"} style={styles.pass} secureTextEntry={true} onChangeText={(password) =>this.setState({password})} />
                        </View>
                        <TouchableOpacity style={styles.In}
                             onPress={()=>this._login()}>
                                 <Text style={styles.buttonIn}>Entrar</Text>
                         </TouchableOpacity>
            </View>
        );
    };

}

const styles = StyleSheet.create({
    background:{
        height: '100%',
        width: '100%',
        backgroundColor: '#030B18'
    },

    Email:{
        color: '#f9f9f9',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 250,
        fontStyle: 'italic',
        marginBottom: 5,
        },
        
        word:{
        color: '#f9f9f9',
        fontSize: 25,
        textAlign: 'center',
        marginTop: 5,
        fontStyle: 'italic',
        marginBottom: 5,
        },
    
        user:{
        color: '#f9f9f9',
        fontSize: 20,
        textAlign: 'center',
        fontStyle: 'italic',
        },
    
        pass:{
            color: '#f9f9f9',
            fontSize: 20,
            textAlign: 'center',
            fontStyle: 'italic',
            borderRadius: 10,
            borderColor: 'white'
        },
    
        In:{
            width: 300,
            height: 55,
            backgroundColor: '#FF7E06',
            marginLeft: 60,
            marginTop: 20,
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 1,    
        },
    
        buttonIn:{
            color: '#f9f9f9',
            fontSize: 30,
            textAlign: 'center',
            marginTop: 5,
            fontStyle: 'italic',    
        },
        
        campoPassword:{
            width:300,
            height: 55,
            borderColor: '#FFAA04',
            borderRadius: 10,
            borderWidth: 2,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 60,
        },
    
        campoEmail:{
            width:300,
            height: 55,
            borderColor: '#FFAA04',
            borderRadius: 10,
            borderWidth: 2,
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 60,
        },
});
