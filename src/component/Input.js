import { Text, View, TextInput, StyleSheet} from 'react-native'
import React, { Component } from 'react'

export default class Input extends Component {
    state ={
        text: ""
    }
  render() {
    return (
      <View>
        <TextInput
        {...this.props}
        placeholderTextColor='grey'
        style={styles.Input}
        value={this.state.text}
        ref={this.props.inputRef}
        onChangeText={text => this.setState({text})}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    Input:{
        height:40,
        paddingHorizontal:15,
        borderWidth:2,
        borderRadius:4,
        borderColor:'#f1f1f1',
        color:'#999',
        marginBottom:8,
        fontSize:14,
        fontWeight:'600',
    },
})