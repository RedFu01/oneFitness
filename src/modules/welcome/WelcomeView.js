import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Router from '../AppRouter';
import * as WelcomeState from './WelcomeState';

export default class Welcome extends React.Component {
  /**
    * This is where we can define any route configuration for this
    * screen. For example, in addition to the navigationBar title we
    * could add backgroundColor.
    */
  static route = {
    navigationBar: {
      title: 'Home',
      backgroundColor: 'red'
    }
  }

  press = () => {
    this.props.navigator.push(Router.getRoute('chat'));
    //this.props.dispatch(WelcomeState.test())
  }

  render() {
    return (
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <TouchableOpacity onPress={()=>this.press()}>
            <Text>HomeScreen!</Text>
        </TouchableOpacity>
      </View>
    )
  }
}