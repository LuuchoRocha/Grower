import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Card} from '@grower/components';

function EnvironmentCard({name, description}) {
  return (
    <Card>
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Button text="Editar" style={styles.edit} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Card>
  );
}

export default EnvironmentCard;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  edit: {
    alignSelf: 'flex-end',
  },
  description: {
    textAlign: 'justify',
    marginTop: 10,
  },
});
