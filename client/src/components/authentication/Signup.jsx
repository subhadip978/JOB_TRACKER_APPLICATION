import { FormControl, Input ,Button, useToast,FormLabel, Box} from '@chakra-ui/react'
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
	<Box  d="flex"
	justifyContent="center"
	p={3}
	bg="white"
	w="100%"
	m="40px 0 15px 0"
	borderRadius="lg"
	borderWidth="1px">
	
	<FormControl  >
		<FormLabel>NAME</FormLabel>
		 <Input
        id="username"
        name="username"
        placeholder="Enter your username"
        onChange={handleChange}
      />
	  </FormControl>


<FormControl >
<FormLabel>EMAIL</FormLabel>
		<Input
		  id="email"
		  name="email"
		  type="email" // Set type="email" for proper validation
		  placeholder="Enter your email"
		  onChange={handleChange}
		/>

	  </FormControl>

	  <FormControl >

<FormLabel>PASSWORD</FormLabel>
	 <Input
        id="password"
        name="password"
        type="password" // Set type="password" for security
        placeholder="Enter your password"
        onChange={handleChange}
      />
	</FormControl>

	<Button
	colorScheme='blue'
	width="100%"
	style={{margin:"15px 10rem", width:"10rem"}}
	onClick={handleSubmit}>
		Sign up

	</Button>
	</Box>
  )
}

export default Signup