import { FormControl, Input ,Button, useToast} from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import axios from 'axios'



const Signup = () => {

	const toast=useToast();
	const [user,setUser]=useState({
		"username":"",
		"email":"",
		"password":""

	})

	const handleSubmit=async()=>{

		try{

			const {data}=await  axios.post("/api/user/signup", user);
				console.log(data);
				toast({
					title: "Registration Successful",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "bottom",
				  });
				  localStorage.setItem("userInfo",JSON.stringify(data))

		}catch(err){
			console.log(err);
			toast({
				title: "Error Occured!",
				description: err.response.data.message,
				status: "error",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			  });
		}
	}




	const handleChange=(e)=>{
		setUser((prev)=>({...prev,[e.target.name]:e.target.value}))

	}
  return (
	<>
	
	<FormControl>
		 <Input
        id="username"
        name="username"
        placeholder="Enter your username"
        onChange={handleChange}
      />

		<Input
		  id="email"
		  name="email"
		  type="email" // Set type="email" for proper validation
		  placeholder="Enter your email"
		  onChange={handleChange}
		/>

	 <Input
        id="password"
        name="password"
        type="password" // Set type="password" for security
        placeholder="Enter your password"
        onChange={handleChange}
      />
	</FormControl>

	<Button
	onClick={handleSubmit}>
		Sign up

	</Button>
	</>
  )
}

export default Signup