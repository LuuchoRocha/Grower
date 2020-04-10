import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '@grower/store-environments';
import {Text} from '@grower/components';
import {Picker} from 'native-base';

export default function SettingsScreen({navigation}) {
  const dispatch = useDispatch();
  const theme = useSelector(Selectors.theme);

  function setTheme(itemValue) {
    dispatch(Actions.setTheme(itemValue));
  }

  return (
    <View style={styles.container}>
      <View style={styles.themeSelector}>
        <Text>Theme</Text>
        <Picker
          textStyle={{color: '#5cb85c'}}
          itemStyle={{
            backgroundColor: '#d3d3d3',
            marginLeft: 0,
            paddingLeft: 10,
          }}
          itemTextStyle={{color: '#788ad2'}}
          note
          mode="dropdown"
          selectedValue={theme}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setTheme(itemValue)}>
          <Picker.Item label="Light" value="light" />
          <Picker.Item label="Dark" value="dark" />
          <Picker.Item label="Follow system" value="system" />
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  themeSelector: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  picker: {
    flex: 1,
    width: undefined,
  },
});
