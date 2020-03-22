import environment from '../environments/environment';

class GsbService {

	login(email, password) {
		const url = environment.apiUrl + '/users/login/' + email + '&password=' + password
		return fetch(url, {
			method: 'POST',
		})
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

	getServicesFromUser(user_id) {
		const url = environment.apiUrl + '/services/personnel/' + user_id
		return fetch(url)
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

	getService(service_id) {
		const url = environment.apiUrl + '/services/' + service_id
		return fetch(url)
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

	saveDepense(service_id, libelle, description, prix) {
		const url = environment.apiUrl + '/depenses/create?service_id=' + service_id + '&libelle=' + libelle + '&description=' + description + '&prix=' + prix
		return fetch(url, {
			method: 'POST',
		})
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

	saveDemande(service_id, budget) {
		const url = environment.apiUrl + '/demandes/create?service_id=' + service_id + '&budget=' + budget
		return fetch(url, {
			method: 'POST',
		})
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

}

export default new GsbService();