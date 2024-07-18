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
  import { useContext } from 'react';
import  { JobListContext } from '../../context/JobContext';


const CreateJobModel = () => {

	const {handleSubmit}=useContext(JobListContext)

	const [inputs,setInputs]=useState({
		title: '',
		company: '',
		salary: 0,
		originaljoburl:'',
		location:'',
		description:''
		
	});
	

	const { isOpen, onOpen, onClose } = useDisclosure()


const handleChange=(e)=>{

	setInputs((prev)=>({...prev,[e.target.name]:e.target.value}))
}

const onSubmit=(e)=>{
	e.preventDefault();
	console.log(inputs);
	handleSubmit(inputs,onClose)
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
		name='title'
		type='text'
		placeholder='enter job title'
		onChange={handleChange}
		mb={4}/>

		<Input
		name='company'
		type='text'
		placeholder='enter job company'
		onChange={handleChange}
		mb={4}/>

		<Input
		name='salary'
		type='text'
		placeholder='enter job salary'
		onChange={handleChange}
		mb={4}/>

		<Input
		name='originaljoburl'
		type='text'
		placeholder='enter job original job url'
		onChange={handleChange}
		mb={4}/>

		
		<Input
		name='location'
		type='text'
		placeholder='enter job location'
		onChange={handleChange}
		mb={4}/>

		<Textarea
		name='description'
        placeholder='Enter the description'
		onChange={handleChange}
        size='lg'
        mb={4}
      />
		


		</FormControl>
	  
	</ModalBody>

	<ModalFooter>
	<Button colorScheme='blue' mr={3} onClick={onSubmit}>
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