import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EnvironmentsScreen} from '@grower/screens';
import {useTheme} from '@react-navigation/native';
import {RightIcon} from '@grower/components';
import {buildStackScreenOptions} from '@grower/helpers';

const Stack = createStackNavigator();

export default function StackNavigator() {
  const {colors} = useTheme();
  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => ({
        ...buildStackScreenOptions('Environments', colors),
        headerRight: () => (
          <RightIcon name="plus" onPress={() => navigation.navigate('Home')} />
        ),
      })}>
      <Stack.Screen name="Environments" component={EnvironmentsScreen} />
    </Stack.Navigator>
  );
}
