import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default function ModalScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Some modal screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
