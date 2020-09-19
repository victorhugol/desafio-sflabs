const mongoose = require('../database/connection');


desastres = ['assalto a bancos',
            'monstros gigantes',
            'desastres naturais']




const DesastreSchema = new mongoose.Schema({
    name : {
        type : String,
        enum: desastres,
        lowercase: true,
        required: true
    }
})


module.exports = {DesastreSchema,desastres};