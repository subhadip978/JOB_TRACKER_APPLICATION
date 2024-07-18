const Sequelize=require('sequelize');

const sequelize=require("../utils/db.js");



const Job=sequelize.define('job',{
	id:{

	type:Sequelize.INTEGER,
	primaryKey:true,
	autoIncrement: true,
	allowNull:false
	},

	title:{
	type:Sequelize.STRING,
	primaryKey:true,
	allowNull:false
	},

	company:{
		type:Sequelize.STRING,
		allowNull:false
	},

	salary:{
		type:Sequelize.INTEGER,
		allowNull:true
	},

	originaljoburl:{
		type:Sequelize.STRING,
		allowNull:false
	},

	appliedDate:{
		type:Sequelize.DATE,
		allowNull:true

	},
	posted:{
		type:Sequelize.STRING,
		allowNull:true
	},
	location:{
		type:Sequelize.STRING,
		allowNull:true
	},
	description:{
		type:Sequelize.STRING,
		allowNull:true
	},

	




})




module.exports=Job ;