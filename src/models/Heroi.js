const mongoose = require('../database/connection');
const {CidadeSchema} = require('./Cidade');
const {DesastreSchema} = require('./Desastre');
const crypto = require('crypto');


const HeroiSchema = new mongoose.Schema({
    nomeReal : {
        type : String,
        required : true
    },
    codinome : {
        type : String,
        required : true,
        unique : true
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


HeroiSchema.pre('save',function(){
    
    this.nomeReal = crypto.createHmac('sha256', this.nomeReal)
                   .update('sflabs')
                   .digest('hex');
    console.log(this.nomeReal);
})



const HeroiModel = mongoose.model('Heroi',HeroiSchema);

module.exports = { HeroiModel, HeroiSchema }; 