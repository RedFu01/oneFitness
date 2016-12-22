import React from 'react';
import {
    AppRegistry,
    Text,
    View,
} from 'react-native';

export default class Chat extends React.Component {
  static route = {
    navigationBar: {
      title: 'Chat',
    }
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text>Chat!</Text>
      </View>
    )
  }
}