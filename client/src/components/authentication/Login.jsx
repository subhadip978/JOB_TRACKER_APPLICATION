import React from 'react'
import { FormControl, Input ,Button, useToast} from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'
import {useNavigate,Link} from 'react-router-dom'


const Login = () => {
  const toast=useToast();
  const navigate=useNavigate();
	const [user,setUser]=useState({
		
		"email":"",
		"password":""

	})

  const handleChange=(e)=>{
    setUser((prev)=>({...prev,[e.target.name]:e.target.value})) ;
  }

  const handleSubmit=async()=>{

    if(!email || !password){
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",

      })
      return
    }

		try{

			const {data}=await  axios.post("/api/user/login",user);
				console.log(data);
				toast({
					title: " Successfully logged in",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "bottom",
				  });
          setUser(data);
          localStorage.setItem("userInfo", JSON.stringify(data));
				  navigate("/home")

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



  return (
    <>
	
    <FormControl>
		

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
		Sign in

	</Button>
	</>
  )
}

export default Login