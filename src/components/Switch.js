import React from 'react';
import {View, Switch as RNSwitch, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Switch({enabled, onChange}) {
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <RNSwitch
        trackColor={{false: colors.card, true: colors.card}}
        thumbColor={enabled ? colors.primary : colors.inactiveToggle}
        ios_backgroundColor={colors.card}
        onValueChange={onChange}
        value={enabled}
      />
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
