// Components/Services.js

import React from 'react'
import { StyleSheet, View, TextInput, FlatList, Button, Text, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import ActiviteItem from './ActiviteItem'
import GsbService from '../services/GsbService'

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
		GsbService.getService(this.props.navigation.state.params.id).then(data => {
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

	_displaySaisi(service) {
		console.log("go")
		this.props.navigation.navigate("Saisi", { id: service.id })
	}

	_displayService() {
		if (this.state.service != undefined) {
			console.log(this.state.service)
			const service = this.state.service.result
			return (
				<View style={{ flex: 1, padding:20 }}>
					<Card style={styles.card}>
						<Title>{service.title} Budget Service</Title>
						<Text style={styles.budget}>{service.budget} EUR</Text>
						<Text style={styles.dispo}>Disponible</Text>
					</Card>
					<View style={{flex:7}}>
						<Title style={styles.titlea}>Vos activités</Title>
						<FlatList
							data={service.depenses}
							keyExtractor={(item) => item.id.toString()}
							renderItem={({ item }) => <ActiviteItem activite={item} />}
						/>
					</View>
					<View style={{ flex: 1, alignItems: 'center', justifyContent:'center' }}>
						<TouchableOpacity onPress={() => this._displaySaisi(service)}>
							<View style={{backgroundColor:'#2196f3', width:250, height:35,  alignItems: 'center', justifyContent:'center', borderRadius:8}}>
								<Text style={{color:'#fff'}}>Ajouter une dépense</Text>
							</View>
						</TouchableOpacity>
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

const theme2 = {
	colors: {
		primary: '#2196f3',
	},
};

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
	activiteContainer: {
		flex: 1,
		padding: 20
	},
	card: {
		padding: 10,
		paddingLeft: 15,
		paddingRight: 15,
		marginBottom: 30
	},
	title: {
		fontSize: 20
	},
	budget: {
		fontSize: 30
	},
	dispo: {
		paddingLeft: 10,
		color: '#727272'
	},
	titlea: {
		marginBottom: 12
	},
	list: {
		flex: 1
	},
	addButton: {

	},

})

export default Service