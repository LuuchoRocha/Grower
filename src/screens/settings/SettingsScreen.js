import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '@grower/store-environments';
import {Text} from '@grower/components';
import {Picker} from 'native-base';
import {useTheme} from '@react-navigation/native';

export default function SettingsScreen({navigation}) {
  const dispatch = useDispatch();
  const theme = useSelector(Selectors.theme);
  const {colors} = useTheme();

  function setTheme(itemValue) {
    dispatch(Actions.setTheme(itemValue));
  }

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.label(colors)}>Theme</Text>
        <View style={styles.themeSelector(colors)}>
          <Picker
            mode="dropdown"
            style={styles.picker(colors)}
            selectedValue={theme}
            onValueChange={(itemValue, itemIndex) => setTheme(itemValue)}>
            <Picker.Item label="Light" value="light" />
            <Picker.Item label="Dark" value="dark" />
            <Picker.Item label="Follow system" value="system" />
          </Picker>
        </View>
      </View>
      <View style={styles.separator(colors)} />
      <View style={styles.setting}>
        <Text style={styles.label(colors)}>Theme</Text>
        <View style={styles.themeSelector(colors)}>
          <Picker
            mode="dropdown"
            style={styles.picker(colors)}
            selectedValue={theme}
            onValueChange={(itemValue, itemIndex) => setTheme(itemValue)}>
            <Picker.Item label="Light" value="light" />
            <Picker.Item label="Dark" value="dark" />
            <Picker.Item label="Follow system" value="system" />
          </Picker>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: (colors) => ({
    flex: 0,
    borderWidth: 0.5,
    borderColor: colors.border,
    marginHorizontal: 15,
  }),
  setting: {
    flex: 0,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  themeSelector: (colors) => ({
    flex: 2,
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.button,
    borderRadius: 4,
  }),
  picker: (colors) => ({
    flex: 0,
    width: undefined,
    color: colors.buttonText,
  }),
  label: (colors) => ({
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
    paddingRight: 10,
    textAlign: 'right',
  }),
});
