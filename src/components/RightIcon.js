import * as React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function RightIcon({onPress, onLongPress, name}) {
  const {colors} = useTheme();

  return (
    <TouchableHighlight
      underlayColor={colors.background}
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.icon}>
      <Icon name={name} size={16} color={colors.headerText} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 45,
    width: 45,
    borderRadius: 25,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
