import 'react-native-gesture-handler';
import * as React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useSelector, connect} from 'react-redux';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {NavigationContainer} from '@react-navigation/native';
import {store, persistor} from '@grower/store';
import {DrawerNavigator} from '@grower/navigators';
import {MenuIcon} from '@grower/components';
import {LightTheme, DarkTheme} from '@grower/themes';
import {Selectors} from '@grower/store-environments';

function Main() {
  const rehydrated = useSelector(Selectors.rehydrated);
  const theme = useSelector(Selectors.theme);
  const scheme = useColorScheme();

  if (rehydrated) {
    return (
      <AppearanceProvider>
        <StatusBar
          barStyle="light-content"
          backgroundColor={
            (scheme === 'dark' && theme !== 'light') || theme === 'dark'
              ? DarkTheme.colors.card
              : LightTheme.colors.card
          }
        />
        <NavigationContainer
          theme={
            (scheme === 'dark' && theme !== 'light') || theme === 'dark'
              ? DarkTheme
              : LightTheme
          }>
          <DrawerNavigator />
        </NavigationContainer>
      </AppearanceProvider>
    );
  } else {
    return null;
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} />
      <Main />
    </Provider>
  );
}
