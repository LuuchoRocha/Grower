import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
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
    primary: 'rgb(240, 255, 200)',
    primaryInactive: 'rgb(200, 220, 200)',
    background: 'rgb(255, 255, 230)',
    card: 'rgb(60, 100, 30)',
    text: 'rgb(0, 0, 0)',
    headerText: 'rgb(240, 255, 200)',
    border: 'rgb(199, 199, 204)',
    button: 'rgb(60, 100, 30)',
    buttonText: 'rgb(255, 255, 255)',
    activeIcon: 'rgb(220, 255, 200)',
    inactiveIcon: 'rgb(140, 160, 130)',
  },
};

const MyDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(90, 140, 90)',
    primaryInactive: 'rgb(200, 220, 200)',
    background: 'rgb(30, 50, 20)',
    card: 'rgb(20, 30, 10)',
    text: 'rgb(180, 200, 160)',
    headerText: 'rgb(180, 200, 160)',
    border: 'rgb(90, 140, 90)',
    button: 'rgb(20, 30, 10)',
    buttonText: 'rgb(180, 200, 160)',
    activeIcon: 'rgb(160, 180, 150)',
    inactiveIcon: 'rgb(80, 100, 60)',
  },
};

export default function App() {
  const scheme = useColorScheme();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={
            scheme === 'dark'
              ? MyDarkTheme.colors.card
              : MyDefaultTheme.colors.card
          }
        />
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
