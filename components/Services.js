// Components/Services.js

import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native'
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
        <FlatList
          data={services}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <ServiceItem service={item} displayDetailForFilm={this._displayDetailForFilm}/>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  textinput: {
    marginTop: 5,
    marginLeft: 30,
   
  }
})

export default Services