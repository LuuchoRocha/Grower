import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/Button';
import Text from '../../components/Text';

function HomeScreen({navigation, state, increase, decrease}) {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{state.counter}</Text>
      <Button text="Increase counter" onPress={increase} />
      <Button text="Decrease counter" onPress={decrease} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  counter: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch({type: 'INCREASE_COUNTER'}),
    decrease: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
