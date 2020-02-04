import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const MyComponent = () => (
  <FAB
    style={styles.fab}
    
    icon="plus"
    onPress={() => console.log('Pressed')}
  />
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    bottom: 20,
    right:10,
    width:55
  },
})

export default MyComponent;