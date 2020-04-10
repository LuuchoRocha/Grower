import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Button({text, onPress, style}) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button(colors), style]}>
      <Text style={styles.text(colors)}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: (colors) => ({
    flex: 0,
    backgroundColor: colors.button,
    elevation: 2,
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  text: (colors) => ({
    color: colors.buttonText,
    fontFamily: 'sans',
  }),
});
