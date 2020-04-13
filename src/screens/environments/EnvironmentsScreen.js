import React from 'react';
import {useSelector} from 'react-redux';
import {View, StyleSheet, FlatList} from 'react-native';
import {EnvironmentCard} from '@grower/components';
import {Selectors} from '@grower/store-environments';

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
