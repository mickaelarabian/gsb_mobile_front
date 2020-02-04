// Navigation/Navigation.js


import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Services from '../components/Services'
import Service from '../components/Service'
import Saisi from '../components/Saisi'

const ServicesStackNavigator = createStackNavigator({
  Services: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Services,
    navigationOptions: {
      title: 'Mes services'
  },
},
Service:{
  screen:Service
}
})




const MoviesTabNavigator = createBottomTabNavigator({
  Service: {
    screen: ServicesStackNavigator
  },
  Saisi: {
    screen: Saisi
  }
})
export default createAppContainer(ServicesStackNavigator)