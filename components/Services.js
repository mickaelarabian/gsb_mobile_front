// Components/Services.js

import React from 'react'
import { StyleSheet, View, FlatList, Text } from 'react-native'
import { Avatar } from 'react-native-paper';
import ServiceItem from './ServiceItem'
import GsbService from '../services/GsbService';

class Services extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			services: []
		}
	}

	componentDidMount(){
		GsbService.getServicesFromUser(3).then(data => {
			this.setState({
				services: data.result
			})
		})
	}

	render() {
		return (
			<View style={styles.main_container}>
				<View style={styles.av} >
					<Avatar.Icon theme={theme} size={100} icon="bank" />
				</View>
				<Text style={styles.title}>Liste des services</Text>
				<FlatList
					data={this.state.services}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <ServiceItem goRoutes={this.props.goRoutes} service={item} />}
				/>
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
		padding: 15,
		paddingTop:50
	},
	textinput: {
		marginTop: 5,
		marginLeft: 30,

	},
	title: {
		fontWeight: 'bold',
		fontSize: 22,
		marginBottom: 5,
		textAlign: 'center'
	},
	av: {
		alignItems: 'center',
		marginBottom: 20
	},
})

export default Services