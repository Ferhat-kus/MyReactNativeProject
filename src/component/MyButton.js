import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.button,]}>
        <Text>{this.props.Text}</Text>
      </TouchableOpacity>
    )
  }
}
MyButton.PropTypes = {
    Text: PropTypes.string.isRequired,
    bgColor: PropTypes.string

};
const styles = StyleSheet.create({
        
});