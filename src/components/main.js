import React from 'react';
import {connect} from 'react-redux';
import {Text, View, ActivityIndicator} from 'react-native';

import {onDecrement, onIncrement, onIncrementAsync} from '../actions/main';
import {styles} from './style';

const Main = ({value, isLoading, onIncrement, onDecrement, onIncrementAsync}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>
        Votes: {value}
      </Text>
      <View style={styles.innerContainer}>
        <Text style={styles.button} onPress={onIncrement}>
          &#xf164;
        </Text>
        <Text style={styles.button} onPress={onDecrement}>
          &#xf165;
        </Text>
        <Text style={styles.button} onPress={onIncrementAsync}>
          &#xf1b0;
        </Text>
      </View>
      <ActivityIndicator
        animating={isLoading}
        color='#000000'
        size='large'>
      </ActivityIndicator>
    </View>
  );
}

const mapStateToProps = ({counter, isLoading}) => {
  console.log(isLoading);
  return {
    value: counter,
    isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDecrement: () => dispatch(onDecrement()),
    onIncrement: () => dispatch(onIncrement()),
    onIncrementAsync: () => dispatch(onIncrementAsync())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
