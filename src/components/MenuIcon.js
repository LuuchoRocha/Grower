import * as React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

export default function MenuIcon() {
  const {colors} = useTheme();
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.openDrawer} style={styles.icon}>
      <Icon name="bars" size={16} color={colors.headerText} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 20,
  },
});
