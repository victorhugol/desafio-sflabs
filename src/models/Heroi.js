const mongoose = require('../database/connection');
const {CidadeSchema} = require('./Cidade');
const DesastreSchema = require('./Desastre');



const HeroiSchema = new mongoose.Schema({
    nomeReal : {
        type : String,
        required : true
    },
    codinome : {
        type : String,
        required : true
    },

    desastres : {
        type : [DesastreSchema],
        required : true
    },

    cidade : {
        type: [CidadeSchema],
        required : true
    },

    trabalhoEmEquipe : {
        type : String,
        required : true,
        set : function(value){
            if(value == ""){
                return "indiferente";
            }else{
                return value
            }
        },
        lowercase : true
    },
    
})


const HeroiModel = mongoose.model('Heroi',HeroiSchema);

module.exports = { HeroiModel, HeroiSchema }; 