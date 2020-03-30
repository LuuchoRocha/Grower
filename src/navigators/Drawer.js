import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigator} from '@grower/navigators';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Stack">
      <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
}
