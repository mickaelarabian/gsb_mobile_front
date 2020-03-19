// Components/ServiceItem.js

import React from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import Moment from 'moment';

class ActiviteItem extends React.Component {

	render() {
		const { activite } = this.props
		return (
			<View style={styles.activite}>
				<View style={styles.acti1}>
					<Avatar.Icon theme={theme} size={30} icon="store" />
				</View>
				<View style={styles.acti2}>
					<Text style={styles.actititre}>{activite.libelle}</Text>
					<Text style={styles.description}>{activite.description}</Text>
				</View>
				<View style={styles.acti3}>
					<Text style={styles.prix}>
						- {activite.prix} EUR
                    </Text>
					<Text style={styles.date}> {Moment(activite.date).format('MMMM Do YYYY')} </Text>
				</View>
			</View>
		)
	}
}

const theme = {
	colors: {
		primary: '#ddd',
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
	activite: {
		flexDirection: 'row',
		flex: 1,
		marginBottom: 15
	},
	titlea: {
		marginBottom: 12
	},
	actititre: {
		fontSize: 15,
		paddingLeft: 5
	},
	description: {
		color: '#727272',
		fontSize: 12,
		paddingLeft: 5
	},
	acti1: {
		flex: 2,
		paddingTop: 2,
		paddingLeft: 5,
		paddingRight: 5,
		borderRadius: 25
	},
	acti2: {
		flex: 13
	},
	acti3: {
		flex: 6,
	},
	list: {
		flex: 1
	},
	addButton: {

	},
	date: {
		fontSize: 10,
		textAlign: 'right',
		color: '#727272'
	},
	prix: {
		textAlign: 'right'
	}
})

export default ActiviteItem