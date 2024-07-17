import React from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
	Button,
	FormControl,
	Input,
	Textarea
  } from '@chakra-ui/react'
  import { useState } from 'react';


const CreateJobModel = () => {

	const [inputs,setInputs]=useState();
	const[jobList,setJobList]=useState([]);

	const { isOpen, onOpen, onClose } = useDisclosure()


const handleChange=(e)=>{

	setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))



}


const handleSubmit=async()=>{
	try{
	  const {data}=await axios.post("/api/job/createJobsrequirement",inputs,{withCredentials:true})
	  console.log(data);
	  setJobList([...jobs,inputs]);
	
	  onClose();
  
	}catch(err){
	  console.log(err);
	  toast({
		title: 'failed!',
			description: 'failed to create  job requirement .',
			status: 'failed',
			duration: 5000,
			isClosable: true,
  
  
	  })
	}
  }

  return (
	<div>

<span onClick={onOpen}>POST A JOB</span>

<Modal isOpen={isOpen} onClose={onClose}>
  <ModalOverlay />
  <ModalContent>
	<ModalHeader>Modal Title</ModalHeader>
	<ModalCloseButton />
	<ModalBody>
		<FormControl>
		<Input
		type='text'
		placeholder='enter job title'
		onChange={handleChange}
		mb={4}/>

		<Input
		type='text'
		placeholder='enter job company'
		onChange={handleChange}
		mb={4}/>

		<Input
		type='text'
		placeholder='enter job salary'
		onChange={handleChange}
		mb={4}/>

		<Input
		type='text'
		placeholder='enter job original job url'
		onChange={handleChange}
		mb={4}/>

		<Textarea
        placeholder='Enter the description'
		onChange={handleChange}
        size='lg'
        mb={4}
      />
		

		</FormControl>
	  
	</ModalBody>

	<ModalFooter>
	<Button colorScheme='blue' mr={3} onClick={handleSubmit}>
		Submit
	  </Button>
	  <Button colorScheme='blue' mr={3} onClick={onClose}>
		Close
	  </Button>
	  {/* <Button variant='ghost'>Secondary Action</Button> */}
	</ModalFooter>
  </ModalContent>
</Modal>
	</div>
  )
}

export default CreateJobModel