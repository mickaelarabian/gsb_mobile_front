// Components/Saisi.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class Saisi extends React.Component {

  _validerSaisi() {
    console.log("validation")
  }

  render() {
    return (
      <View style={styles.main_container}>
        <View>
          <TextInput style={styles.input} placeholder="Libelle"/>
          <TextInput style={styles.input} placeholder="Description"/>
          <TextInput style={styles.input} placeholder="Prix"/>
          <Button title="Enregistrer" onPress={() => this._validerSaisi()}/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex:1,
    paddingLeft: 25,
    paddingRight: 25,
    justifyContent: 'center'
  },
input:{
  marginBottom:15,
  paddingLeft:5,
  borderBottomWidth:1,
  borderColor: '#bbb',
  borderRadius:5
},
title:{
  fontWeight: 'bold',
  fontSize:22,
  marginBottom:5
}
})

export default Saisi