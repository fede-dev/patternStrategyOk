const objFetch = require('./strategie')
const httManager = require('./httpManager')

const strategieManager = new httManager()
strategieManager.setStrategie(objFetch)

//GET
const option = { url: "https://jsonplaceholder.typicode.com/users", header: "" }
const result = strategieManager.get(option)
result.then(result => strategieManager.returnText(result).then(respuesta => console.log(respuesta)).catch(error => console.log("Error " + error)))

