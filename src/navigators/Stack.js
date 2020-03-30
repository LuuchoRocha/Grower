import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabsNavigator} from '@grower/navigators';
import {ModalScreen} from '@grower/screens';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator mode="modal" initialRouteName="Tabs">
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Navigator>
  );
}
