// Components/ServiceItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

class ServiceItem extends React.Component {

	render() {
		const { service, displayDetailForFilm } = this.props
		return (
			<TouchableOpacity activeOpacity={0.8} onPress={() => displayDetailForFilm(service)}>
				<View style={{ marginTop: 5, marginBottom: 5, marginLeft: 10, marginRight: 10, backgroundColor: '#fff', elevation: 1, borderRadius: 50, paddingLeft: 15, flexDirection: 'row' }}>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Avatar.Icon theme={theme} size={30} icon="bank" />
					</View>
					<View style={{paddingLeft:10, paddingBottom:8}}>
						<Title>Service {service.nom}</Title>
						<Text>Budget: <Text style={styles.green}>{service.budget} EUR</Text></Text>
					</View>
				</View>
			</TouchableOpacity>
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
		marginTop: 5,
		marginBottom: 5,
		paddingLeft: 10,
		paddingBottom: 5
	},
	green: {
		color: 'green'
	},
})

export default ServiceItem