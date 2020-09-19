const mongoose = require('../database/connection');
const {cidades} = require('./Cidade');
const {desastre} = require('./Desastre');
const {HeroiSchema} = require('./Heroi');




const AnuncioSchema = new mongoose.Schema({
    desastre : {
        type : String,
        enum : desastre,
        required : true
    },
    cidades : {
        type : String,
        enum : Object.keys(cidades),
        required : true
    },

})

function validate() {
    console.log(this.disaster)
}



const AnuncioModel = new mongoose.model('Anuncio',AnuncioSchema);

module.exports = AnuncioModel;