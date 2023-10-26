
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import Input from "../component/Input";
import MyButton from '../component/MyButton';


export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.singInText}>Sing In</Text>
        <Input
        returnKeyType={"next"}
        autoCapitalize="none"
        placeholder="UserName..."
        onSubmitEditing={() => this.passwordInput.focus()}
        />
        <Input
        returnKeyType={"go"}
        secureTextEntry={true}
        placeholder="Password"
        inputRef={input => this.passwordInput = input}/> 

        <MyButton
        bgColor={"#0065e0"}
        Text={"Sing In Now"}
        />      
      </View>
    )
  }
}
const styles = StyleSheet.create({
    singInText:{
        marginVertical:10,
        fontSize:17,
        color:'#333',
        fontWeight:'bold',
    }
});