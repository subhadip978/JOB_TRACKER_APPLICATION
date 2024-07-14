

const User=require("../models/user");
const bcrypt=require('bcrypt');

exports.register=async(req,res)=>{

	try{
		const {username,email,password}=req.body ;

		const existUser=await User.findOne({where:{email}});

		if(existUser){
			res.status(409).json("user already exist")
		}


		const hashedPassword=await bcrypt.hash(password,10);
		const user=await User.create({username,email,hashedPassword})

		res.status(200).json("user is successfully registered")



	}catch(err){
		res.status(500).json({message:err.message})

	}
}


exports.login=async(req,res)=>{

		try{

			const {email,password}=req.body ;

			const findUser=await User.findOne({where:{email}});

			if(!findUser){
				res.status(404).json("user is not exist ! please sign up")

			}

			const existPassword=await  bcrypt.compareSync(password,findUser.password);

			if(!existPassword){
				res.status(401).json("wrong password");
			}

			const token= jwt.sign({id:findUser.id},process.env.SECRET_KEY)
			

			const data={
				id:findUser.id,
				name:findUser.username
			}

			res.cookie("accessTokeen",token,{
				httpOnly:true,
			})
			.sttaus(200)
			.json(data);
		}catch(err){

			res.status(500).json({message:err.message});
		}


}