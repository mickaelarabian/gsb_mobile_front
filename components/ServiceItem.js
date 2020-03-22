// Components/ServiceItem.js

import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-paper';

class ServiceItem extends React.Component {

	render() {
		const { service } = this.props
		return (
			<TouchableOpacity activeOpacity={0.8} onPress={() => this.props.goRoutes(service.id)}>
				<View style={{ marginTop: 5, marginBottom: 5, marginLeft: 10, marginRight: 10, backgroundColor: '#f7f7f7', elevation: 1, borderRadius: 50, paddingLeft: 15, flexDirection: 'row', paddingTop:3 }}>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Avatar.Icon theme={theme} size={30} icon="bank" />
					</View>
					<View style={{paddingLeft:10, paddingBottom:8}}>
						<Text style={{fontWeight:'bold', fontSize:17}}>Service {service.nom}</Text>
						<Text>Budget: <Text style={styles.blue}>{service.budget} EUR</Text></Text>
					</View>
				</View>
			</TouchableOpacity>
		)
	}
}
const theme = {
	colors: {
		primary: '#2196f3'
	},
};

const styles = StyleSheet.create({
	main_container: {
		marginTop: 5,
		marginBottom: 5,
		paddingLeft: 10,
		paddingBottom: 5
	},
	blue: {
		color: '#1e88e5'
	},
})

export default ServiceItem