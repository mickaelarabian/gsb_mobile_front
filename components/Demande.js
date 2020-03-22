// Components/Saisi.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'
import { Avatar } from 'react-native-paper';
import GsbService from '../services/GsbService'

class Demande extends React.Component {

	constructor(props) {
		super(props)
		this.budget = ""
		this.state = {
			error: ""
		}
	}

	_budgetInputChanged(text) { this.budget = text }


	_validerSaisi() {
		if (this.budget.length > 0) {
			console.log("ok on insert")
			GsbService.saveDemande(this.props.route.params.id, this.budget)
			this.setState({ error: "La demande a bien été prise en compte !" })
		} else {
			console.log("on insert pas")
			this.setState({ error: "Tous les champs doivent être remplis !" })
		}
	}

	render() {
		console.log(this.state.error)
		return (
			<View style={styles.main_container}>
				<View>
					<View style={styles.av} >
						<Avatar.Icon theme={theme} size={100} icon="cash" />
					</View>
					<Text style={styles.title}>Demande de budget</Text>
					<Text style={styles.text}>Veuillez remplir les champs pour demander du budget.</Text>
					<TextInput style={styles.input} onChangeText={(text) => this._budgetInputChanged(text)} placeholder="Budget" />
					<Button title="Enregistrer" onPress={() => this._validerSaisi()} />
					<Text>{this.state.error}</Text>
				</View>
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
		paddingLeft: 25,
		paddingRight: 25,
		justifyContent: 'center'
	},
	input: {
		marginBottom: 15,
		paddingLeft: 5,
		borderBottomWidth: 1,
		borderColor: '#bbb',
		borderRadius: 5
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
	text: {
		textAlign: 'center',
		color: '#727272'
	}
})

export default Demande