const { objFetch, objAxios } = require('./strategie')
const httManager = require('./httpManager')

const strategieManager = new httManager()
strategieManager.setStrategie(objFetch)
const option = { url: "https://mocki.io/v1/b87f427a-40b3-48d3-b5ea-26051137f98c?usItemId=gzhdsghabdfjhdfa", header: "" }
const result = strategieManager.get(option)
result.then(result => strategieManager.returnJson(result).then(respuesta => console.log(respuesta)).catch(error => console.log("Error " + error)))



