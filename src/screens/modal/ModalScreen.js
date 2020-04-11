import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from '@grower/components';

export default function ModalScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Some modal screen</Text>
      <Button text="Close modal" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
