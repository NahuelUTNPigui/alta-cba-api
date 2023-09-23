var express = require('express')
const Comercio = require('../models/comercios.js')
var ruta = express.Router()
ruta.get('/buscar/:id',async(req,res)=>{
    let c_db = await Comercio.findByPk(req.params.id)
    res.json({data:c_db})
})
ruta.get('/comercios',async(req,res)=>{
    let datos = await Comercio.findAll({})
    res.json(datos)
})
module.exports=ruta