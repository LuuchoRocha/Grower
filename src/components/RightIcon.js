import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function RightIcon({onPress, onLongPress, name}) {
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.icon}>
      <Icon name={name} size={16} color={colors.headerText} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 20,
  },
});
