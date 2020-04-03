import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Button({text, onPress}) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={styles.button(colors)}>
      <Text style={styles.text(colors)}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: (colors) => ({
    flex: 0,
    backgroundColor: colors.button,
    elevation: 4,
    padding: 8,
    borderRadius: 4,
  }),
  text: (colors) => ({
    color: colors.buttonText,
  }),
});
