import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

function SettingsScreen({navigation, state}) {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{state.counter}</Text>
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
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreen);
