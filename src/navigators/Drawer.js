import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabsNavigator} from '@grower/navigators';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Dimensions, StyleSheet} from 'react-native';
const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Stack"
      backBehavior="history"
      drawerStyle={styles.drawer}
      drawerContentOptions={{
        itemStyle: {marginVertical: 30},
        labelStyle: {
          fontWeight: 'bold',
          fontFamily: 'sans',
        },
      }}>
      <Drawer.Screen
        name="Stack"
        component={TabsNavigator}
        options={{
          drawerLabel: 'Grower',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="cannabis" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  drawer: {
    elevation: 8,
    width: (Dimensions.get('window').width / 3) * 2,
  },
});
