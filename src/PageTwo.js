import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';

export default class PageTwo extends Component {

  render() {
    return (
      <View stlye={{ margin: 128 }}>
        <Text></Text>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}