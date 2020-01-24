import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

export default class MyComponent extends React.Component {
  _goBack = () => console.log('Went back');

  _handleSearch = () => console.log('Searching');

  _handleMore = () => console.log('Shown more');

  render() {
    const header = this.props.header
    console.log(header);
    return (
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction
          onPress={this._goBack}
        />
        <Appbar.Content
          title={header}
          subtitle='ok'
        />
        <Appbar.Action icon="magnify" onPress={this._handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={this._handleMore} />
      </Appbar.Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor:'#6b5aed'
  },
 
})