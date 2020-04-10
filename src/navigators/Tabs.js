import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {HomeScreen, SettingsScreen, EnvironmentsScreen} from '@grower/screens';
import {useTheme} from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

export default function TabsNavigator() {
  const {colors} = useTheme();

  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'cannabis';
          } else if (route.name === 'Settings') {
            iconName = 'cogs';
          } else {
            iconName = 'android';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.activeIcon,
        inactiveTintColor: colors.inactiveIcon,
        labelStyle: {
          fontFamily: 'sans',
        },
        style: {
          borderTopWidth: 0,
          height: 48,
          paddingVertical: 4,
        }
      }}>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Environments" component={EnvironmentsScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
}
