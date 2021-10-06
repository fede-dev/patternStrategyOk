const httpManager = function(){
    this.strategie = null
    this.setStrategie = (strategie)=> {
        this.strategie = strategie
    }
    this.get = async(option)=> await this.strategie.get(option)
    this.post = async(option)=> await this.strategie.post(option)
    this.put = async(option)=> await this.strategie.put(option)
    this.delete = async(option)=> await this.strategie.delete(option)
    this.returnText = (obj)=> this.strategie.returnText(obj)
}

module.exports = httpManager
