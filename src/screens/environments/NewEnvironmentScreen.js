import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text} from '@grower/components';
import {useTheme} from '@react-navigation/native';

function NewEnvironmentScreen({route, navigation}) {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.primary} size={64} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewEnvironmentScreen;
