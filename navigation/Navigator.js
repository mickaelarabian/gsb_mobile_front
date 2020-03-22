import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Services from '../components/Services';
import Service from '../components/Service';
import Saisi from '../components/Saisi';
import Login from '../components/Login'
import Demande from '../components/Demande';

export default class Navigator extends Component {

	LoginView = ({ navigation }) => { return <Login navigation={navigation} goRoutes={() => navigation.navigate('services')} /> }

	ServicesStackView() {
		const Stack = createStackNavigator();
		function ServicesView({ route, navigation }) { return <Services route={route} goRoutes={(id) => navigation.navigate('service', {id: id})} /> }
		function ServiceView({ route, navigation }) { return <Service route={route} navigation={navigation} goRoutes={(route, id) => navigation.navigate(route, {id: id})} /> }
		function SaisiView({ route, navigation }) { return <Saisi route={route} navigation={navigation} goRoutes={(route) => navigation.navigate(route)} /> }
		function DemandeView({ route, navigation }) { return <Demande route={route} navigation={navigation} goRoutes={(route) => navigation.navigate(route)} /> }
		return (
			<Stack.Navigator>
				<Stack.Screen name="services" options={{ headerTitle: 'Vos services dans l\'entreprise' }} component={ServicesView} />
				<Stack.Screen options={{ headerTitle: 'Service sélectionné' }} name="service" component={ServiceView} />
				<Stack.Screen options={{ headerTitle: 'Saisi de dépense' }} name="saisi" component={SaisiView} />
				<Stack.Screen options={{ headerTitle: 'Demande de budget' }} name="demande" component={DemandeView} />
			</Stack.Navigator>
		);
	}

	render() {
		const Tab = createBottomTabNavigator();
		console.disableYellowBox = true;
		return (
			<NavigationContainer>
				<Tab.Navigator initialRouteName="service">
					<Tab.Screen name="login" options={{ tabBarVisible: false }} component={this.LoginView} />
					<Tab.Screen name="services" options={{ tabBarVisible: false }} component={this.ServicesStackView} />
				</Tab.Navigator>
			</NavigationContainer>
		);
	}
}
