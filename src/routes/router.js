const express = require("express");
const router = express.Router();
const {HeroiModel} = require('../models/Heroi')
const Anuncio = require('../models/Anuncio')
router.use(express.json());






router.post('/registrar/heroi', async function (req,res){
    try{
        var heroi = await HeroiModel.create(req.body);
        console.log(heroi)
        return res.send({res : req.body.codinome});
    }catch(err){
        return res.status(400).send({res : err})
    }
})

router.post('/registar/anuncio', async function (req,res){
    try{
        var heroi = await HeroiModel.create(req.body);
        console.log(heroi)
        return res.send({res : req.body.codinome});
    }catch(err){
        return res.status(400).send({res : err})
    }
})

module.exports = router;