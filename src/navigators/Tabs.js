import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeStackNavigator,
  EnvironmentsStackNavigator,
} from '@grower/navigators';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SettingsScreen} from '@grower/screens';
import {RightIcon} from '@grower/components';
import {useTheme} from '@react-navigation/native';
import {Alert} from 'react-native';

const Tabs = createBottomTabNavigator();

export default function TabsNavigator({navigation}) {
  const {colors} = useTheme();

  function createEnvironment() {
    Alert.alert('Hola');
  }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Ambientes',
      headerRight: () => <RightIcon onPress={createEnvironment} name="plus" />,
    });
  }, [navigation]);

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
        },
      }}>
      <Tabs.Screen name="Home" component={HomeStackNavigator} />
      <Tabs.Screen name="Environments" component={EnvironmentsStackNavigator} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
}
