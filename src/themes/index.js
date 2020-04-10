import {DefaultTheme, DarkTheme as RNDarkTheme} from '@react-navigation/native';

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(210, 230, 190)',
    primaryInactive: 'rgb(200, 220, 200)',
    background: 'rgb(255, 255, 230)',
    card: 'rgb(50, 100, 20)',
    text: 'rgb(0, 0, 0)',
    headerText: 'rgb(240, 255, 200)',
    border: 'rgb(199, 199, 204)',
    button: 'rgb(60, 100, 30)',
    buttonText: 'rgb(255, 255, 255)',
    activeIcon: 'rgb(220, 255, 200)',
    inactiveIcon: 'rgb(140, 160, 130)',
    activeToggle: 'rgb(120, 150, 90)',
    inactiveToggle: 'rgb(60, 100, 30)',
  },
};

export const DarkTheme = {
  ...RNDarkTheme,
  colors: {
    ...RNDarkTheme.colors,
    primary: 'rgb(50, 80, 30)',
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
