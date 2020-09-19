const mongoose = require('../database/connection');


const cidades = {
    "new york" : {
        min : 1,
        max : 3
    },
    "rio de janeiro" : {
        min : 2,
        max : 5,
    },
    "toquio": {
        min : 3,
        max : 6
    }
}

const CidadeSchema = new mongoose.Schema({
    name : {
        type : String,
        enum : Object.keys(cidades),
        lowercase : true,
        required : true   
    }
})


module.exports = {CidadeSchema,cidades};