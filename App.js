import 'react-native-gesture-handler';
import * as React from 'react';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {DrawerNavigator} from '@grower/navigators';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';

const MyDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(240, 255, 150)',
    primaryInactive: 'rgb(200, 220, 200)',
    background: 'rgb(222, 255, 222)',
    card: 'rgb(90, 140, 90)',
    text: 'rgb(0, 0, 0)',
    border: 'rgb(199, 199, 204)',
    textDark: 'rgb(255, 255, 255)',
    button: 'rgb(90, 140, 90)',
    buttonText: 'rgb(240, 255, 150)',
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(90, 140, 90)',
    primaryInactive: 'rgb(200, 220, 200)',
    background: 'rgb(40, 70, 30)',
    card: 'rgb(30, 50, 20)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(90, 140, 90)',
    textDark: 'rgb(210, 255, 200)',
    button: 'rgb(200, 240, 190)',
    buttonText: 'rgb(40, 70, 30)',
  },
};

export default function App() {
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppearanceProvider>
          <NavigationContainer
            theme={scheme === 'dark' ? MyDarkTheme : MyDefaultTheme}>
            <DrawerNavigator />
          </NavigationContainer>
        </AppearanceProvider>
      </PersistGate>
    </Provider>
  );
}
