const express = require("express");
const router = express.Router();
const {HeroiModel} = require('../models/Heroi')
router.use(express.json());




router.post('/registrar/heroi', async function (req,res){
    try{
        var heroi = await HeroiModel.create(req.body);
        return res.send({res : req.body.codinome});
    }catch(err){
        return res.status(400).send({res : err})
    }
})

router.get('/heroi', async function (req,res){
    try{
        const Heroi = await HeroiModel.find({})
        return res.send(Heroi);
    }catch(err){
        return res.status(404).send({res : err})
    }
})


module.exports = router;