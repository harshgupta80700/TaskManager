const jwt = require('jsonwebtoken');
const jsw = require('express');


const auth = (req,res,next)=>{
    // console.log("auth middleware")
    // next()

    try{
        const token = req.header('Authorization').replace('Bearer','')
        console.log(token)
    }catch(e){
        res.status(401).send({error: 'please Authenticate'});
    }

}

module.exports = auth