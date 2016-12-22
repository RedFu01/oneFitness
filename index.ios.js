import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppViewContainer from './src/modules/AppViewContainer';

export default class oneFitness extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppViewContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('oneFitness', () => oneFitness);
