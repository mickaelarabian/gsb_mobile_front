// Components/Login.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class Login extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View style={styles.form}>
          <TextInput style={styles.textinput} placeholder='Adresse email'/>
          <TextInput style={styles.textinput} placeholder='Mot de passe'/>
          <View style={styles.button}>
            <Button title='Connexion' onPress={() => {}}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: "center"
  },
  textinput: {
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    height: 40,
    borderColor: '#bbb',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor:'#fff',
    borderRadius:4,
  },
  button: {
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30
  },
  form:{

  }
})

export default Login