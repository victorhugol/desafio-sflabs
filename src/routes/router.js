const express = require("express");
const router = express.Router();
router.use(express.json());


router.get('/',(req,res)=>{
    return res.send({Hello : "Mundo"})
})


module.exports = router;