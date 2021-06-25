let names = require("names")

module.exports ={
    generate_name:function(){
        let random = parseInt(Math.random()*100)%93
        return names.list.get(random)
    }

}