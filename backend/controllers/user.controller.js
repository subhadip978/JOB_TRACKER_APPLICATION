

const User=require("../models/user");
const bcrypt=require('bcrypt');

const jwt=require("jsonwebtoken");
require("dotenv").config()

exports.register=async(req,res)=>{

	try{
		const { username, email, password } = req.body;
		
      
        const existUser = await User.findOne({ where: { email } });
        if (existUser) {
            return res.status(409).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

      
        const user = await User.create({ username, email, password: hashedPassword });

        res.status(200).json({ message: "User successfully registered", user });



	}catch(err){
		console.log(err);
		res.status(500).json({message:err.message})

	}
}


exports.login=async(req,res)=>{

		try{

			const {email,password}=req.body ;

			const findUser=await User.findOne({where:{email}});

			if(!findUser){
				return res.status(404).json("user is not exist ! please sign up")

			}

			const existPassword=await  bcrypt.compareSync(password,findUser.password);

			if(!existPassword){
				res.status(401).json("wrong password");
			}
			console.log(process.env.SECRET_KEY);
			console.log(process.env.PORT);
			const token= jwt.sign({id:findUser.id},process.env.SECRET_KEY)
			

			const data={
				id:findUser.id,
				name:findUser.username
			}

			res.cookie("accessToken",token,{
				httpOnly:true,
			})
			.status(200)
			.json(data);
		}catch(err){
			console.log(err);

			res.status(500).json({message:err.message});
		}


}