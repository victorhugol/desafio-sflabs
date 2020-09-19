const mongooseAnuncio = require('../database/connection');
const {cidades} = require('./Cidade');
const {desastre} = require('./Disastre');
const {HeroiSchema} = require('./Heroi');




const AnuncioSchema = new mongooseAnuncio.Schema({
    desastre : {
        type : String,
        enum : desastre,
        required : true
    },
    cidades : {
        type : String,
        enum : cidades,
        required : true
    },
    
})

// function validate() {
//     console.log(this.disaster)
// }



const Anuncio = new mongooseAnuncio.model('Anuncio',AnuncioSchema);

module.exports = Anuncio;