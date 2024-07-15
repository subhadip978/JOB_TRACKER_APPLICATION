import React from 'react'
import './jobmodel.css'
import {
  
  VStack,
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
	useToast,
  Box,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody
  } from '@chakra-ui/react'
  import { useState ,useEffect} from 'react';
  import axios from 'axios'

const JobModel = () => {
	const toast = useToast();
	const [formData, setFormData] = useState({
	  title: '',
	  company: '',
	  salary: 0,
	  originaljoburl: '',
	  appliedDate: '',
	});

  const [jobs,setJobs]=useState([]);

	const handleChange=(e)=>{
	
			setFormData((prev)=>({...prev,[e.target.name]:e.target.value})
)
}

const handleSubmit=async()=>{
  try{
    const {data}=await axios.post("/api/job/createJobs",formData,{withCredentials:true})
    console.log(data);
    setJobs([...jobs,formData]);
    fetchJobs();
    onClose();

  }catch(err){
    console.log(err);
    toast({
      title: 'failed!',
          description: 'failed to create  job .',
          status: 'success',
          duration: 5000,
          isClosable: true,


    })
  }
}

const fetchJobs=async()=>{
  try{

    const {data}=await axios.get("/api/job/getallJobs",{withCredentials:true});
    console.log(data.jobs);
    setJobs(data.jobs);
  }
  catch(err){
    console.log(err);
    toast({
      title: 'Job fetched.',
          description: 'unable to fetch jobs',
          status: 'success',
          duration: 5000,
          isClosable: true,


    })

  }
}

useEffect(()=>{
  fetchJobs();
},[])

 
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>ADD JOB DETAILS</Button>

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
            <Button onClick={handleSubmit} colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={8} align="stretch">
      <Box p={6}>
     

      <TableContainer className="main-table">
      <Table variant="simple">
        <Thead>
          <Tr>
          <Th>Job Position</Th>
                <Th>Company</Th>
                <Th>Max. Salary</Th>
                <Th>JobURL</Th>
                <Th>Status</Th>
                <Th>Date Saved</Th>
                <Th>Date Applied</Th>
              
          </Tr>
        </Thead>

        <Tbody>
          {jobs.length>0?(jobs.map((job,i)=>(

            <Tr key={i}>
               <Td>{job.title}</Td>
                  <Td>{job.company}</Td>
                  <Td>${job.salary?.toLocaleString()}</Td>
                  <Td>{job.originaljoburl}</Td>
                  <Td>{job.status}</Td>
                 
                  <Td>{job.dateApplied}</Td>
                  
                  

            </Tr>

          ))):(
            <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                  <Td></Td>
                 
                  <Td></Td>
                  </Tr>
                  


          )}
        </Tbody>
        </Table>
      </TableContainer>
    </Box>

    </VStack>

    </>
  )

 
}

export default JobModel