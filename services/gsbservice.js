// API/TMDBApi.js

const API_TOKEN = "055730a585af27c8a2208844c1d0787f";

export function getFilmsFromApiWithSearchedText (text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}

export function getServicesFromUser (user_id) {
    const url = 'http://192.168.221.131:8000/api/services/personnel/5' + user_id
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function getService (service_id) {
    const url = 'http://10.10.1.67:8000/api/services/1'
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }

  export function saveDepense (service_id, libelle, description, prix) {
    const url = 'http://10.10.1.67:8000/api/depenses/create?service_id=' + service_id + '&libelle=' + libelle + '&description=' + description + '&prix=' + prix
    return fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error))
  }