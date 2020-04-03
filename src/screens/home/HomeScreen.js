import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/Button';

function HomeScreen({navigation, state, increase, decrease}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
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
  title: {},
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
