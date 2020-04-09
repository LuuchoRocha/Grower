import * as React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function Text(props) {
  const {colors} = useTheme();
  return <RNText {...props} style={[styles.text(colors), props.style]} />;
}

const styles = StyleSheet.create({
  text: (colors) => ({
    fontFamily: 'sans',
    color: colors.text,
  }),
});
