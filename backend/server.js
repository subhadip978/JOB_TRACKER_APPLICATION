const express=require("express");
const app=express();
const port=3000;
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors=require('cors');

const sequelize=require("./utils/db");


const userRouter=require("./routers/user.router")
 const jobRouter=require("./routers/job.router")
// const companyRouter=require("./routers/company.router")
app.use(
	cors({
		origin:"http://localhost:5173",
		credentials:true
	})
)

app.use(express.json());
app.use(cookieParser());

app.use("/api/user",userRouter);
app.use("/api/job",jobRouter);
// app.use("/api/user",companyRouter);

sequelize.
sync()
.then((result)=>{
	


	app.listen(port,()=>{
		console.log(`serever is running at ${port}`)
	})
})

