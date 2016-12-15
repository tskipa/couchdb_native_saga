import React, { Component } from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          &#xf0c4;
        </Text>
        <Text style={styles.title}>
          Sesavali
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
