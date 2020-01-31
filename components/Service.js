// Components/Services.js

import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text, ActivityIndicator, ScrollView  } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import services from '../helpers/servicesData'
import ServiceItem from './ServiceItem'
import AppBar from './AppBar'
import { getService } from '../services/gsbservice'

class Service extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      service: undefined,
      isLoading: true
    }
  }

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

  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }

  _displayService() {
    if (this.state.service != undefined) {
      console.log(this.state.service)
      const service = this.state.service.result
      return (
        <ScrollView style={styles.scrollview_container}>
          <Card style={styles.card}>
            <Title>{service.title} balance</Title>
              <Paragraph>
                <Title style={styles.budget}>{service.budget} EUR</Title>
                <Text style={styles.green}>Disponible</Text>
              </Paragraph>
          </Card>
        </ScrollView>
      )
    }
  }

  render() {
    const title = 'Service comptabilité'
    const subtitle = 'Siège Administratif'
    return (
      <View style={styles.main_container}>
        {this._displayLoading()}
        {this._displayService()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollview_container: {
    flex: 1,
    padding: 10
  },
  card:{
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  title:{
    fontSize: 20
  },
  budget:{
    fontSize: 30
  }
})

export default Service