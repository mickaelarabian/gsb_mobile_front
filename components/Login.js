// Components/Login.js

import React from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text } from 'react-native'
import { Avatar, Icon, Card, Title, Paragraph } from 'react-native-paper';

class Login extends React.Component {
  render() {
    return (
      <View style={styles.main_container}>
        <View>
        <Avatar.Icon theme={theme} size={100} icon="atlassian" />
          <Text style={styles.title}>Bienvenue sur GSB</Text>
          <Text style={styles.text}>Veuillez vous connecter avec vos informations privés pour accéder à la plateforme de gestion des services et budgets du laboratoire.</Text>
        </View>
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
const theme = {
  colors: {
    primary: '#64b5f6',
  },
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: "center",
    padding:30
  },
  textinput: {
    marginBottom:15,
    paddingLeft:5,
    borderBottomWidth:1,
    borderColor: '#bbb',
    borderRadius:5
  },
  button: {
    marginTop: 5,
  },
  form:{
    marginTop:20
  },
  title:{ 
    textAlign:'center',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom:20
  },
  text:{
    textAlign:'center',
    color:'#727272'
  }
})

export default Login