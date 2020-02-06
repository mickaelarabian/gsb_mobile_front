// Components/Services.js

import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Button, Text, ActivityIndicator, ScrollView } from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import services from '../helpers/servicesData'
import ServiceItem from './ServiceItem'
import AppBar from './BottomNavigation'
import { getService } from '../services/gsbservice'
import Bott from './BottomNavigation'

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

  _displaySaisi(service){
    console.log("go")
    this.props.navigation.navigate("Saisi", {id:service.id})
  }

  _displayService() {
    if (this.state.service != undefined) {
      console.log(this.state.service)
      const service = this.state.service.result
      return (
        <View style={{flex:1}}>
        <ScrollView style={styles.scrollview_container}>
          <Card style={styles.card}>
            <Title>{service.title} Budget Service</Title>
              
                  <Text style={styles.budget}>{service.budget} EUR</Text>
                  <Text style={styles.dispo}>Disponible</Text>
          </Card>
          
              <View>
                <Title style={styles.titlea}>Vos activités</Title>
                <View style={styles.activite}>
                  <View style={styles.acti1}>
                  <Avatar.Icon size={30} icon="store" />
                  </View>
                  <View style={styles.acti2}>
                    <Text style={styles.actititre}>Achat Materiel</Text>
                    <Text style={styles.description}>Paiement éffectué</Text>
                  </View>
                  <View style={styles.acti3}>
                    <Text>
                    - 8,99 EUR
                    </Text>
                  </View>
                </View>
                <View style={styles.activite}>
                  <View style={styles.acti1}>
                  <Avatar.Icon size={30} icon="store" />
                  </View>
                  <View style={styles.acti2}>
                    <Text style={styles.actititre}>Achat Materiel</Text>
                    <Text style={styles.description}>Paiement éffectué</Text>
                  </View>
                  <View style={styles.acti3}>
                    <Text>
                    - 8,99 EUR
                    </Text>
                  </View>
                </View>
                <View style={styles.activite}>
                  <View style={styles.acti1}>
                  <Avatar.Icon size={30} icon="store" />
                  </View>
                  <View style={styles.acti2}>
                    <Text style={styles.actititre}>Achat Materiel</Text>
                    <Text style={styles.description}>Paiement éffectué</Text>
                  </View>
                  <View style={styles.acti3}>
                    <Text>
                    - 8,99 EUR
                    </Text>
                  </View>
                </View>
                <View style={styles.activite}>
                  <View style={styles.acti1}>
                  <Avatar.Icon size={30} icon="store" />
                  </View>
                  <View style={styles.acti2}>
                    <Text style={styles.actititre}>Achat Materiel</Text>
                    <Text style={styles.description}>Paiement éffectué</Text>
                  </View>
                  <View style={styles.acti3}>
                    <Text>
                    - 8,99 EUR
                    </Text>
                  </View>
                </View>
                <View style={styles.activite}>
                  <View style={styles.acti1}>
                  <Avatar.Icon size={30} icon="store" />
                  </View>
                  <View style={styles.acti2}>
                    <Text style={styles.actititre}>Achat Materiel</Text>
                    <Text style={styles.description}>Paiement éffectué</Text>
                  </View>
                  <View style={styles.acti3}>
                    <Text>
                    - 8,99 EUR
                    </Text>
                  </View>
                </View>
                <View style={styles.activite}>
                  <View style={styles.acti1}>
                  <Avatar.Icon size={30} icon="store" />
                  </View>
                  <View style={styles.acti2}>
                    <Text style={styles.actititre}>Achat Materiel</Text>
                    <Text style={styles.description}>Paiement éffectué</Text>
                  </View>
                  <View style={styles.acti3}>
                    <Text>
                    - 8,99 EUR
                    </Text>
                  </View>
                </View>
              </View>
        </ScrollView>
        <View>
              <Button style={styles.addButton} title="+" onPress={() => this._displaySaisi(service)}/>
        </View>
        </View>
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
    padding: 20
  },
  card:{
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 30
  },
  title:{
    fontSize: 20
  },
  budget:{
    fontSize: 30
  },
  dispo:{
    paddingLeft: 10,
    color: '#727272'
  },
  activite:{
    flexDirection: 'row',
    flex:1,
    marginBottom:15
  },
  titlea:{
    marginBottom: 12
  },
  actititre:{
    fontSize: 15,
    paddingLeft: 5
  },
  description:{
    color: '#727272',
    fontSize: 12,
    paddingLeft: 5
  },
  acti1:{
    flex:2,
    paddingTop: 2,
    paddingLeft:5,
    paddingRight:5,
    borderRadius: 25
  },
  acti2:{
    flex: 13
  },
  acti3:{
    flex:4
  },
  list:{
    flex:1
  },
  addButton:{

  }
})

export default Service