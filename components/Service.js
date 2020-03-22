// Components/Services.js

import React from 'react'
import { StyleSheet, View, FlatList, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import { Avatar, Title } from 'react-native-paper';
import ActiviteItem from './ActiviteItem'
import GsbService from '../services/GsbService'

class Service extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			service: undefined,
			isLoading: true,
			current: undefined
		}
	}

	componentDidMount() {
		console.log("Component Service monté")
		GsbService.getService(this.props.route.params.id).then(data => {
			this.setState({
				service: data,
				isLoading: false
			})
		})
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

	selectItem = (id) => {
		if (this.state.current == id) {
			this.setState({
				current: undefined
			})
		} else {
			this.setState({
				current: id
			})
		}
	}
	//f2
	currentItem = (id) => {
		return (this.state.current == id ? '#ddd' : '#f7f7f7')
	}

	_displayService() {
		if (this.state.service != undefined) {
			console.log(this.state.service)
			const service = this.state.service.result
			return (
				<View style={{ flex: 1, padding: 20 }}>
					<View style={styles.card}>
						<Title>Service {service.nom}</Title>
						<Text style={styles.title2}>Budget</Text>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
								<TouchableOpacity activeOpacity={0.8} onPress={() => this.props.goRoutes('demande', service.id)}>
									<Avatar.Icon theme={theme} size={30} icon="cash" />
								</TouchableOpacity>
							</View>
							<View style={{ flex: 4 }}>
								<Text style={styles.budget}>{service.budget} EUR</Text>
								<Text style={styles.dispo}>Disponible</Text>
							</View>
						</View>
					</View>
					<View style={{ flex: 1 }}>

						<View style={{ flex: 123 }}>
							<Title style={styles.titlea}>Vos activités</Title>
							<FlatList
								data={service.depenses}
								keyExtractor={(item) => item.id.toString()}
								renderItem={({ item }) => <ActiviteItem currentItem={this.currentItem} selectItem={this.selectItem} activite={item} />}
							/>
						</View>
						<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
							<TouchableOpacity style={{ top: -25 }} activeOpacity={0.8} onPress={() => this.props.goRoutes('saisi', service.id)}>
								<View style={{ backgroundColor: 'red', borderRadius: 50, elevation: 4 }}>
									<Avatar.Icon theme={theme} size={50} icon="plus" />
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			)
		}
	}

	render() {
		return (
			<View style={styles.main_container}>
				{this._displayLoading()}
				{this._displayService()}
			</View>
		)
	}
}

const theme = {
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
		marginBottom: 30,
		backgroundColor: '#fff',
		borderRadius: 5,
		elevation: 4
	},
	title: {
		fontSize: 20
	},
	title2: {
		paddingLeft: 5,
		fontSize: 18,
	},
	budget: {
		fontSize: 28,
		textAlign: 'right'
	},
	dispo: {
		paddingLeft: 5,
		color: '#727272',
		fontStyle: 'italic',
		textAlign: 'right'
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