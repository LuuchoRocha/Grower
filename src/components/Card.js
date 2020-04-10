import * as React from 'react';
import {View, TouchableHighlight, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

function Card({children, onPress, onLongPress, style, containerStyle}) {
  const {colors} = useTheme();

  return (
    <TouchableHighlight
      onPress={onPress}
      onLongPress={onLongPress}
      activeOpacity={0.6}
      underlayColor={colors.card}
      style={[styles.card(colors), style]}>
      <View style={[styles.flex, containerStyle]}>{children}</View>
    </TouchableHighlight>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: (colors) => ({
    backgroundColor: colors.primary,
    elevation: 4,
    margin: 10,
    borderRadius: 4,
  }),
  flex: {
    flex: 1,
    padding: 10,
  },
});
