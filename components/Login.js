// Components/Login.js

import React from 'react'
import { StyleSheet, View, Image, TextInput, Button, Text } from 'react-native'
import { Avatar } from 'react-native-paper';

class Login extends React.Component {
	constructor(props) {
		super(props)
		this.email = ""
		this.password = ""
		this.state = {
			error: ""
		}
	}

	_emailInputChanged(text) {
		this.email = text
	}

	_passwordInputChanged(text) {
		this.password = text
	}

	submit = () => {
		if (this.email.length > 0 && this.password.length > 0) {
			this.props.goRoutes()
		} else {
			this.setState({ error: "Tous les champs doivent être remplis !" })
		}
	}

	render() {
		return (
			<View style={styles.main_container}>
				<View>
					<View style={styles.av} >
						<Avatar.Icon theme={theme} size={100} icon="atlassian" />
					</View>
					<Text style={styles.title}>Bienvenue sur GSB</Text>
					<Text style={styles.text}>Veuillez vous connecter avec vos informations privés pour accéder à la plateforme de gestion des services et budgets du laboratoire.</Text>
				</View>
				<View style={styles.form}>
					<TextInput style={styles.textinput} onChangeText={(text) => this._emailInputChanged(text)} placeholder='Adresse email' />
					<TextInput style={styles.textinput} onChangeText={(text) => this._passwordInputChanged(text)} placeholder='Mot de passe' />
					<View style={styles.button}>
						<Button title='Connexion' onPress={() => { this.submit() }} />
						<Text>{this.state.error}</Text>
					</View>
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
		justifyContent: "center",
		paddingLeft: 30,
		paddingRight: 30,
		paddingBottom:20
	},
	textinput: {
		marginBottom: 15,
		paddingLeft: 5,
		borderBottomWidth: 1,
		borderColor: '#bbb',
		borderRadius: 5
	},
	button: {
		marginTop: 5,
	},
	form: {
		marginTop: 20
	},
	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 25,
		marginBottom: 20
	},
	text: {
		textAlign: 'center',
		color: '#727272'
	},
	av: {
		alignItems: 'center',
		marginBottom: 20
	}
})

export default Login