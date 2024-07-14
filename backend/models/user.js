const sequelize=require("../utils/db");

const Sequelize=require("sequelize");



const User =sequelize.define('user',{
	id:{
		type:Sequelize.INTEGER,
		autoIncrement:true,
		allowNull:false,
		primaryKey:true

	},
	username:{
		type:Sequelize.STRING,
		allowNull:false
	},
	email:{
		type:Sequelize.STRING,
		allowNull:false
	},
	pasword:{
		type:Sequelize.STRING,
		allowNull:false
	}

})

module.exports=User