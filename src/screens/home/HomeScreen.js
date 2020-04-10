import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Text} from '@grower/components';
import {Actions, Selectors} from '@grower/store-environments';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const counter = useSelector(Selectors.counter);

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Button
        text="Increase counter"
        onPress={() => dispatch(Actions.increaseCounter())}
      />
      <Button
        text="Decrease counter"
        onPress={() => dispatch(Actions.decreaseCounter())}
      />
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

export default HomeScreen;
