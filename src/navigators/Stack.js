import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {TabsNavigator} from '@grower/navigators';
import {ModalScreen} from '@grower/screens';
import {useTheme} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      mode="modal"
      initialRouteName="Tabs"
      screenOptions={({route}) => ({
        headerTintColor: colors.textDark,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}>
      <Stack.Screen name="Tabs" component={TabsNavigator} />
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Navigator>
  );
}
