const { Sequelize } = require('sequelize');

let sequelize = new Sequelize({dialect:'sqlite',storage:'base.db'})
module.exports=sequelize