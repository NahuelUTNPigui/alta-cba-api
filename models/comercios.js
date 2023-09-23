const { Model,DataTypes } = require('sequelize');
const sequelize =require('./base.js')

class Comercio extends Model{}
Comercio.init({
    nombre:{
        type: DataTypes.STRING,
        allowNull: true
    },
    descripcion:{
        type: DataTypes.STRING,
        allowNull: true
    },
    tags:{
        type: DataTypes.STRING,
        allowNull: true
    }},{
        sequelize,
        modelName:"Comercio",
        freezeTableName:true
    })
module.exports=Comercio