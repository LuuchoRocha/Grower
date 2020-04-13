import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';
import {EnvironmentsScreen, NewEnvironmentScreen} from '@grower/screens';
import {useTheme} from '@react-navigation/native';
import {RightIcon} from '@grower/components';
import {buildStackScreenOptions} from '@grower/helpers';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        transitionSpec: {
          open: TransitionSpecs.TransitionIOSSpec,
          close: TransitionSpecs.TransitionIOSSpec,
        },
      }}>
      <Stack.Screen
        name="Environments"
        component={EnvironmentsScreen}
        options={({navigation, route}) => ({
          ...buildStackScreenOptions({title: 'Environments', colors: colors}),
          headerRight: () => (
            <RightIcon
              name="plus"
              onPress={() => navigation.push('NewEnvironment')}
            />
          ),
        })}
      />
      <Stack.Screen
        name="NewEnvironment"
        component={NewEnvironmentScreen}
        options={buildStackScreenOptions({
          title: 'Add new environment',
          colors: colors,
          menuButton: false,
        })}
      />
    </Stack.Navigator>
  );
}
