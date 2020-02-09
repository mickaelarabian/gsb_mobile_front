// Components/ServiceItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

class ServiceItem extends React.Component {

render() {
    const { service, displayDetailForFilm } = this.props
    return (
      <TouchableOpacity onPress={() => displayDetailForFilm(service)}>
          <Card style={styles.main_container}>
<Title>Service {service.nom}</Title>
      <Paragraph>Budget: <Text style={styles.green}>{service.budget} EUR</Text></Paragraph>
  </Card>
  </TouchableOpacity>
    )
}
}

const styles = StyleSheet.create({
  main_container: {
    marginTop:5,
    marginBottom:5,
    paddingLeft:10,
    paddingBottom:5
  },
  green: {
    color:'green'
  },
})

export default ServiceItem