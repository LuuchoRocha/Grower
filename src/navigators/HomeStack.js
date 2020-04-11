import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '@grower/screens';
import {useTheme} from '@react-navigation/native';
import {buildStackScreenOptions} from '@grower/helpers';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const {colors} = useTheme();
  return (
    <Stack.Navigator screenOptions={buildStackScreenOptions('Home', colors)}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
