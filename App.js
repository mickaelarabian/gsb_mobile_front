// App.js

import React from 'react'
import Search from './components/Search'
import Login from './components/Login'
import Services from './components/Services'
import Service from './components/Service'
import Navigation from './navigation/navigation'

export default class App extends React.Component {
  render() {
    return (
      <Navigation/>
    )
  }
}
