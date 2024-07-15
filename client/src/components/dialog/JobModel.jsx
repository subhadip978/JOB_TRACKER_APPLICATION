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
	FormLabel,
	Input,
	useToast
  } from '@chakra-ui/react'
  import { useState } from 'react';

const JobModel = () => {
	const toast = useToast();
	const [formData, setFormData] = useState({
	  title: '',
	  company: '',
	  salary: '',
	  originaljoburl: '',
	  appliedDate: '',
	});

	const handleChange=(e)=>{
	
			setFormData((prev)=>({...prev,[e.target.name]:e.target.value})
)
}
 
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>

		  <FormControl id="title" isRequired>
            <FormLabel>Job Title</FormLabel>
            <Input
              name="title"
            
               onChange={handleChange}
              placeholder="Job Title"
            />
          </FormControl>

          <FormControl id="company" isRequired>
            <FormLabel>Company</FormLabel>
            <Input
              name="company"
            
            onChange={handleChange}
              placeholder="Company"
            />
          </FormControl>

          <FormControl id="salary">
            <FormLabel>Salary</FormLabel>
            <Input
			name="salary"
			type="number"
			
			/>
          </FormControl>

          <FormControl id="originaljoburl" isRequired>
            <FormLabel>Original Job URL</FormLabel>
            <Input
              name="originaljoburl"
            
               onChange={handleChange}
              placeholder="Original Job URL"
            />
          </FormControl>

          <FormControl id="appliedDate">
            <FormLabel>Applied Date</FormLabel>
            <Input
              type="date"
              name="appliedDate"
           
               onChange={handleChange}
            />
          </FormControl>


           
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

 
}

export default JobModel