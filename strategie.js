const fetchNode = require('node-fetch')
const axios = require('axios')

const objFetch = {
    get: async(options) => {
        try{
            const objProps = {
                method : "get",
                header :options.header
            }
            const result = await fetchNode(options.url, objProps)
           return result
        }catch(error){
            console.log("Ha ocurrido un error " + error)
        }
    },
    post:()=>{console.log("post")},
    put:()=>{console.log("put")},
    delete:()=>{console.log("delete")},
    returnJson:async(obj)=>{
      return await obj.json()
    },
    returnText:async(obj)=>{
        return await obj.text()
      }
}


const objAxios = {
    get:async() => {console.log("get") },
    post:()=>{console.log("post")},
    put:()=>{console.log("put")},
    delete:()=>{console.log("delete")}
}



module.exports = {objFetch,  objAxios}