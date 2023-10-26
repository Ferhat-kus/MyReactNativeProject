import { StyleSheet, Text, View ,ScrollView,KeyboardAvoidingView} from 'react-native'
import React, { Component } from 'react'
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headBacgraund} />
        <KeyboardAvoidingView behavior="position">
          <View>
            <Text style={styles.logo}>UDAK</Text>
            <Text style={styles.logoDescription}>Property & Tax Survey</Text>
          </View>
          <ScrollView>
            <View style={styles.loginArea}>
              <Text style={styles.loginAreaTitle}>Property Tax Server</Text>
              <Text style={styles.loginAreaDescription}>Lorem Ipsum is simply dummy of the printing.</Text>
              <LoginForm />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#F5FCFF',
    paddingTop:80,
  },
  headBacgraund:{
    position:'absolute',
    top:0,
    left:0,
    height:280,
    width:'100%',
    backgroundColor:'#1572de',
  },
  logo:{
    textAlign:'center',
    fontSize:40,
    color:'#f2f2f2',
    fontWeight:'bold',
  },
  logoDescription:{
    textAlign:'center',
    color:'#f2f2f2',
  },
  loginArea:{
    marginHorizontal:40,
    marginVertical:40,
    backgroundColor:'#fff',
    padding:20,
    borderRadius:5,
    elevation:3,
  },
  loginAreaTitle:{
    fontSize:30,
    color:'black',
    fontWeight:'bold',
    textAlign:'center',
  },
  loginAreaDescription:{
    fontSize:16,
    color:'#7e868f',
    textAlign:'center',
    marginVertical:10,
  },
});