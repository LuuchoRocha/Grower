import * as React from 'react';
import {TouchableHighlight, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function MenuIcon() {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      underlayColor={colors.background}
      onPress={navigation.openDrawer}
      style={styles.icon}>
      <Icon name="bars" size={16} color={colors.headerText} />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
