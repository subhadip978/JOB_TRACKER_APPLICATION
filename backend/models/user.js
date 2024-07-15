const sequelize=require("../utils/db");

const Sequelize=require("sequelize");

const Job=require("./job")

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
	password:{
		type:Sequelize.STRING,
		allowNull:false
	}

})

User.hasMany(Job,{foreignkey:'userId', as :'jobs'})
Job.belongsTo(User,{foreignKey:'jobId', as:'users'});

module.exports=User