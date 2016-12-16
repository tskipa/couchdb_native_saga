import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        &#xf1b0;
      </Text>
      <Text style={styles.title}>
        mTavari
      </Text>
    </View>
  );
}

export default Main;
