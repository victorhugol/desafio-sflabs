const express = require("express");
const {CidadeModel} = require('../models/Cidade');
const router = express.Router();
router.use(express.json());



//  rota de cadastro
router.post('/registrar/cidade', async function (req,res){
    try{
        var cidade = CidadeModel.create(req.body); 
        return res.send(cidade.name);
    }catch(err){
        return res.status(400).send({res : err})
    }
})

// rota que lista cidade
router.get('/cidades', async function (req,res){
    try{
        const cidades = await CidadeModel.find({})
        return res.status(200).send(cidades);
    }catch(err){
        return res.status(204).send({res : err})
    }
})

// rota que atualiza cidade
router.put('/atualiza/cidade', async function(req,res){
    try{
        var cidade = await cidade
                            .findOneAndUpdate({name : req.query.name},
                                            {name : req.body},
                                            useFindAndMody=false);
        return res.send({ok : "Dados Atualizados"});
    }catch(err){
        return res.status(204).send({erro : err})
    }
})

//deleta cidade pelo nome
router.delete('/delete/cidade',async function(req,res){
    try{
        var deleted = await CidadeModel.findOneAndDelete({name : req.body.name});
        return res.send({ok : "ok"})
    }catch(err){
        return res.status(204).send({erro : "Heroi não encontrado!"})
    }
})










module.exports = router;