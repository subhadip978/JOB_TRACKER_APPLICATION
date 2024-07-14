const sequelize=require("..utils/db");
const Sequelize=require("sequelize");



sequelize.define('companydetails',{




	id:{
		type:Sequelize.INTEGER,
		primaryKey:true,
		autoIncrement: true,
		allowNull:false
	},

	name:{
		type:Sequelize.STRING,
		allowNull:false
	},

	size:{
		type:Sequelize.INTEGER,
		allowNull:false

	},

	website:{
		type:Sequelize.STRING,
		allowNull:false
	},

	linkdin:{
		type:Sequelize.STRING,
		allowNull:false

	}


})