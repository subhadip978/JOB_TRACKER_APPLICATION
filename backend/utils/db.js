const Sequelize=require("sequelize");


const sequelize=new Sequelize('jobtracker','root','Ineed$10lpa',{
host:'localhost',
dialect:'mysql',
}
)


sequelize.authenticate()
.then(()=>{
	console.log('db connection has been established')
})
.catch((err)=>{
	console.error('unable to connect the db')
})

module.exports=sequelize;