import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from '../../components/Text';

export default function SettingsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>This is the settings screen.</Text>
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
