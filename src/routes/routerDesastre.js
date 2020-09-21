const express = require("express");
const router = express.Router();
const {HeroiModel} = require('../models/Heroi')
router.use(express.json());



//  rota de cadastro
router.post('/registrar/heroi', async function (req,res){
    try{

        var existe = await HeroiModel.find({codinome : req.body.codinome});
        if(existe.length == 0){
            await HeroiModel.create(req.body);
            return res.status(200).send({ok : "Heroi Cadastrado!"});
        }else{
            return res.status(409).send({erro : "Heroi ja existe!!"})
        }
    }catch(err){
        return res.status(400).send({res : err})
    }
})

// rota que lista herois
router.get('/heroi', async function (req,res){
    try{
        const Heroi = await HeroiModel.find({})
        return res.status(200).send(Heroi);
    }catch(err){
        return res.status(204).send({res : err})
    }
})

// rota que atualiza herois
router.put('/atualiza/heroi', async function(req,res){
    try{
        var heroiAtualizado = await HeroiModel
                            .findOneAndUpdate({codinome : req.query.codinome},
                                            {codinome : req.body},
                                            useFindAndMody=false);
        return res.send({ok : "Dados Atualizados"});
    }catch(err){
        return res.status(204).send({erro : err})
    }
})

//delete heroi pelo codinome
router.delete('/delete/heroi',async function(req,res){
    try{
        var deleted = await HeroiModel.findOneAndDelete({codinome : req.body.codinome});
        return res.send({ok : "ok"})
    }catch(err){
        return res.status(204).send({erro : "Heroi não encontrado!"})
    }
})










module.exports = router;