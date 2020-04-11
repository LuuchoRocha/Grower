import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {EnvironmentCard} from '@grower/components';
import {Selectors} from '@grower/store-environments';
import {FlatList} from 'react-native-gesture-handler';

function renderItem({item}) {
  return (
    <EnvironmentCard
      key={item.id}
      name={item.name}
      description={item.description}
    />
  );
}

function EnvironmentsScreen({route, navigation}) {
  const environments = useSelector(Selectors.environments);

  return (
    <View style={styles.container}>
      <FlatList data={environments} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EnvironmentsScreen;
