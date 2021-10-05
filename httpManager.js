const httpManager = function(){
    this.strategie = null
    this.setStrategie = (strategie)=> {
        this.strategie = strategie
    }
    this.get = async(option)=> await this.strategie.get(option)
    this.post = ()=> this.strategie.post()
    this.put = ()=> this.strategie.put()
    this.delete = ()=> this.strategie.delete()
    this.returnJson = (obj)=> this.strategie.returnJson(obj)
    this.returnText = (obj)=> this.strategie.returnText(obj)
}

module.exports = httpManager
