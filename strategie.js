const fetchNode = require('node-fetch')


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
    returnText:async(obj)=>{
        return await obj.text()
    },

    post: async(options) =>{
        try {  
            const objProps = {
                method: "post",
                body: options.req.body,
                header :options.header
            }
            const result = await fetchNode(options.url, objProps)
            return result
        }catch(error){
            console.log(" Ocurrio un error " + error.message)
        }
    },

    put: async(options)=>{
        try {  
            const objProps = {
                method: "put",
                body: options.req.body,
                id: options.req.params.id,
                header :options.header
            }
            const result = await fetchNode(options.url, objProps)
            return result
        }catch(error){
            console.log(" Ocurrio un error " + error.message)
        }
    },
    delete:async(options)=>{
        try {  
            const objProps = {
                method: "delete",
                id: options.req.params.id,
                header :options.header
            }
            const result = await fetchNode(options.url, objProps)
            return result
        }catch(error){
            console.log(" Ocurrio un error " + error.message)
        }
    }
}

module.exports = objFetch