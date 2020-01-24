// Navigation/Navigation.js


import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Services from '../components/Services'
import Service from '../components/Service'

const ServicesStackNavigator = createStackNavigator({
  Services: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Services,
    navigationOptions: {
      title: 'Rechercher'
  }
},
Service:{
  screen:Service
}
})

export default createAppContainer(ServicesStackNavigator)