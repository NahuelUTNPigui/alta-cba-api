var express = require('express')
const Comercio = require('../models/comercios.js')
var ruta = express.Router()
ruta.post('/test',(req,res)=>{
    res.json(req.user)
})
ruta.post('/agregar',async (req,res)=>{
    let c_db = await Comercio.create(req.body)
    console.log(c_db)
    res.json(c_db)
})
ruta.post('/eliminar/:id',async(req,res)=>{
    let c_db = await Comercio.findByPk(req.params.id)
    if(c_db === null){
        res.json({error:-1,msg:"No se encontró"})
    }
    else{
        await Comercio.destroy({
            where:{
                id:req.params.id
            }
        })
        res.json({error:0,msg:"todo bien"})
    }
})
ruta.post('/modificar/:id',async(req,res)=>{
    let c_db = await Comercio.findByPk(req.params.id)
    if(c_db === null){
        res.json({error:-1,msg:"No se encontró"})
    }
    else{
        await Comercio.update(req.body,{
            where:{
                id:req.params.id
            }
        })
        res.json({error:0,msg:"todo bien"})
    }
})
ruta.get('/buscar/:id',async(req,res)=>{
    let c_db = await Comercio.findByPk(req.params.id)
    res.json({data:c_db})
})
ruta.get('/comercios',async(req,res)=>{
    let datos = await Comercio.findAll({})
    res.json(datos)
})
module.exports=ruta