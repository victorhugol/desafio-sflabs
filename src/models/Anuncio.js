const mongoose = require('../database/connection');
const {cidades} = require('./Cidade');
const {desastres} = require('./Desastre');
const {HeroiSchema, HeroiModel} = require('./Heroi');




const AnuncioSchema = new mongoose.Schema({
    desastre : {
        type : String,
        enum : Object.keys(desastres),
        required : true
    },
    cidade : {
        type : String,
        enum : cidades,
        required : true
    },
    herois : {
        type : [String],
        set : setHerois
    }

})


async function setHerois(){
    var herois = await HeroiModel.find({cidade : this.cidade,
                                        trabalhoEmEquipe : "sim"|"indiferente",
                                        disponivel : true});
    return herois;
}



const AnuncioModel = new mongoose.model('Anuncio',AnuncioSchema);

module.exports = AnuncioModel;