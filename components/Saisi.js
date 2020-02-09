// Components/Saisi.js

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'
import { Avatar, Icon, Card, Title, Paragraph } from 'react-native-paper';
import { saveDepense } from '../services/gsbservice'

class Saisi extends React.Component {

	constructor(props) {
		super(props)
		this.libelle = ""
		this.description = ""
		this.prix = ""
		this.state = {
			error: ""
		}
	}

	_libelleInputChanged(text) {
		this.libelle = text
	}

	_descriptionInputChanged(text) {
		this.description = text
	}

	_prixInputChanged(text) {
		this.prix = text
	}

	_validerSaisi() {
		console.log("validation")
		if (this.libelle.length > 0 && this.description.length > 0 && this.prix.length > 0) {
			console.log("ok on insert")
			saveDepense(this.props.navigation.state.params.id, this.libelle, this.description, this.prix)
			this.setState({ error: "La dépense a bien été enregistrée !" })
		} else {
			console.log("on insert pas")
			this.setState({ error: "Tous les champs doivent être remplis !" })
		}
		console.log(this.libelle)
		console.log(this.description)
		console.log(this.prix)
	}

	render() {
		console.log(this.state.error)
		return (
			<View style={styles.main_container}>
				<View>
					<View style={styles.av} >
						<Avatar.Icon theme={theme} size={100} icon="widgets" />
					</View>
					<Text style={styles.title}>Saisi de dépense</Text>
					<Text style={styles.text}>Veuillez remplir les champs pour saisir votre dépense.</Text>
					<TextInput style={styles.input} onChangeText={(text) => this._libelleInputChanged(text)} placeholder="Libelle" />
					<TextInput style={styles.input} onChangeText={(text) => this._descriptionInputChanged(text)} placeholder="Description" />
					<TextInput style={styles.input} onChangeText={(text) => this._prixInputChanged(text)} placeholder="Prix" />
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

export default Saisi