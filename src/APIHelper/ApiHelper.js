export default {
  callApi(query) {
    return fetch('http://api-adresse.data.gouv.fr/search/?q=' + query, {
      method: "get"
    }).then(data => data.json())
    .then(resultJson => {
      return resultJson.features.map(adresse => adresse.properties.label)
    })
  }
}
