const express = require("express");
const router = express.Router();

const Film = require("../models/Film");

router.get("/", async (req,res) => {
    
    try{
        const films = await Film.find();
        res.send(films)
    }catch(err){
        res.send({message:err});
    }
});

module.exports = router;