// Components/Services.js

import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native'
import { Avatar, Icon, Card, Title, Paragraph } from 'react-native-paper';
import services from '../helpers/servicesData'
import ServiceItem from './ServiceItem'
import AppBar from './AppBar'

class Services extends React.Component {

  _displayDetailForFilm = (services) => {
    console.log("Display service with id " + services.id)
    this.props.navigation.navigate("Service", {id:services.id})
  }

  render() {
    const title = 'Mes services'
    return (
      <View style={styles.main_container}>
        <View style={styles.av} >
        <Avatar.Icon theme={theme} size={100} icon="bank" />
          </View>
        <Text style={styles.title}>Liste des services</Text>
        <FlatList
          data={services}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ServiceItem service={item} displayDetailForFilm={this._displayDetailForFilm}/>}
        />
      </View>
    )
  }
}

const theme = {
  colors: {
    primary: '#2196f3',
  },
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding:15
  },
  textinput: {
    marginTop: 5,
    marginLeft: 30,
   
  },
  title:{
    fontWeight: 'bold',
    fontSize:22,
    marginBottom:5,
    textAlign: 'center'
  },
  av:{
    alignItems: 'center',
    marginBottom:20
  },
})

export default Services