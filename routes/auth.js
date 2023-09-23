var express = require('express')
const jwt = require('jsonwebtoken');
var ruta = express.Router()

function verificar(user,pass){

    if(user === process.env.USUARIO){
        if(pass === process.env.CONTRA){
            return true
        }
    }
    return false
}
ruta.post('/login',(req,res)=>{
    console.log(req.body)
    let ans = verificar(req.body.user,req.body.pass)
    if(ans){
        const token = jwt.sign({
            name: process.env.USUARIO,
            id: process.env.ID
        }, process.env.SECRET_KEY)
        res.header("token",token).json({
            error: null,
            verifica:true,
            data: {token}
        })
    }
    else{
        res.header("token","").json({
            error: null,
            verifica:false,
            data: {token:""}
        })
    }
})
module.exports=ruta