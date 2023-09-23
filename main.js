require("dotenv").config()
const express = require('express')
const jwt = require('jsonwebtoken')
const sequelize=require('./models/base.js')
const app = express()
var cors = require('cors');
const verifyToken = (req, res, next) => {
    const token = req.header('token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY)
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}
app.use(express.json())
app.use(cors())
/*
app.use(function (req, res, next) {
    console.log(req.method);
    console.log(req.path);
    next();
})
*/
app.use('/auth',require('./routes/auth.js'))
app.use('/noauthcomercio',require('./routes/comercios.js'))
app.use('/comercio',verifyToken,require('./routes/comercios.js'))
app.get('/',(req,res)=>{
    res.send('hola babe')
})

async function init(app,sequelize){
    app.listen(process.env.PORT,()=>{
        console.log("Usando app in port: ",process.env.PORT)
    })
    await sequelize.sync({})
}
init(app,sequelize)