
class GsbService {

	getServicesFromUser(user_id) {
		const url = 'http://192.168.1.11:8000/api/services/personnel/5' + user_id
		return fetch(url)
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

	getService(service_id) {
		const url = 'http://192.168.1.11:8000/api/services/1'
		return fetch(url)
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

	saveDepense(service_id, libelle, description, prix) {
		const url = 'http://192.168.1.11:8000/api/depenses/create?service_id=' + service_id + '&libelle=' + libelle + '&description=' + description + '&prix=' + prix
		return fetch(url, {
			method: 'POST',
		})
			.then((response) => response.json())
			.catch((error) => console.error(error))
	}

}

export default new GsbService();