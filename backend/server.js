const express=require("express");
const app=express();
const port=3000;
require('dotenv').config();

const sequelize=require("./utils/db");


const userRouter=require("./routers/user.router")
// const jobRouter=require("./routers/job.router")
// const companyRouter=require("./routers/company.router")



app.use("/api/user",userRouter);
// app.use("/api/user",jobRouter);
// app.use("/api/user",companyRouter);

sequelize.
sync({force:true})
.then((result)=>{
	

	app.listen(port,()=>{
		console.log(`serever is running at ${port}`)
	})
})
