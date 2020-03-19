// App.js

import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Text, ActivityIndicator, ScrollView } from 'react-native'
import Login from './components/Login'
import Services from './components/Services'
import Service from './components/Service'
import Saisi from './components/Saisi'
import Navigation from './navigation/navigation'

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}
