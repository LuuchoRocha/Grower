import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Actions, Selectors} from '@grower/store-environments';
import {Text} from '@grower/components';
import {useTheme} from '@react-navigation/native';
import {ButtonGroup} from 'react-native-elements';


export default function SettingsScreen({navigation}) {
  const dispatch = useDispatch();
  const theme = useSelector(Selectors.theme);
  const {colors} = useTheme();
  const themes = ['System', 'Light', 'Dark'];
  const {width, height} = Dimensions.get('window');

  function setTheme(selectedIndex) {
    dispatch(Actions.setTheme(themes[selectedIndex].toLowerCase()));
  }

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.label(colors)}>Theme</Text>
        <ButtonGroup
          onPress={setTheme}
          selectedIndex={theme !== 'system' ? (theme !== 'light' ? 2 : 1) : 0}
          buttons={themes}
          containerStyle={styles.themeSelector(colors, width)}
          buttonStyle={styles.themeButton(colors)}
          selectedButtonStyle={styles.themeSelectedButton(colors)}
          textStyle={styles.themeText(colors)}
          selectedTextStyle={styles.themeSelectedText(colors)}
          innerBorderStyle={styles.themeInnerBorder(colors)}
          containerBorderRadius={4}
        />
      </View>
      <View style={styles.separator(colors)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: (colors) => ({
    borderWidth: 0.5,
    borderColor: colors.border,
    marginHorizontal: 10,
  }),
  setting: {
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: 'flex-start',
  },
  label: (colors) => ({
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 4,
  }),
  themeSelector: (colors, width) => ({
    backgroundColor: colors.card,
    borderColor: colors.background,
    borderRadius: 4,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  }),
  themeInnerBorder: (colors) => ({
    color: colors.background,
    width: 2,
  }),
  themeButton: (colors) => ({
    backgroundColor: colors.primary,
  }),
  themeSelectedButton: (colors) => ({
    backgroundColor: colors.button,
  }),
  themeText: (colors) => ({
    color: colors.text,
  }),
  themeSelectedText: (colors) => ({
    color: colors.buttonText,
  }),
});
