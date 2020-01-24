// Components/Services.js

import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text } from 'react-native'
import services from '../helpers/servicesData'
import ServiceItem from './ServiceItem'
import AppBar from './AppBar'
import { getService } from '../services/gsbservice'

class Service extends React.Component {

  componentDidMount() {
    console.log("Component Service monté")
    getService(this.props.navigation.state.params.id).then(data => {
      this.setState({
        service: data,
        isLoading: false
      })
    })
    console.log("ok");
  }

  render() {
    const title = 'Service comptabilité'
    const subtitle = 'Siège Administratif'
    return (
      <View style={styles.main_container}>
        <AppBar header={title}/>
        <Text>service {this.props.navigation.state.params.id}</Text>
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

export default Service