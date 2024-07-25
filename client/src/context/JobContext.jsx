import React from 'react'
import { createContext } from 'react'
import { useState ,useEffect} from 'react'

import { useToast } from '@chakra-ui/react'

import axios from 'axios'


export const JobListContext=createContext()

const JobContext = ({children}) => {
	const [jobList, setJobList] = useState([]);
  	const toast = useToast();


  useEffect(() => {
    const fetchJobList = async () => {
      try {
        const { data } = await axios.get('/api/job/getAllJoblists', { withCredentials: true });
		console.log(data.jobs);
		console.log(data);
        setJobList(data.jobs);
      } catch (err) {
        console.log(err);
        toast({
          title: 'Failed!',
          description: 'Failed to fetch job list.',
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    };
	 fetchJobList();
},[]);



	const handleSubmit=async(inputs,onClose)=>{
		try{
			console.log(inputs);
			for (const key in inputs) {
				if (!inputs[key]) {
					toast({
						title: 'WARNING',
						description: 'All fields must be filled.',
						status: 'error',
						duration: 5000,
						isClosable: true,
					});
					return;
				}
			}
		  const {data}=await axios.post("/api/job/createJobsrequirement",inputs,{withCredentials:true})
		  console.log(data);
		  setJobList([...jobList,inputs]);
		
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
	<JobListContext.Provider value={{ jobList, handleSubmit }}>
		{children}
		
		</JobListContext.Provider>
  )
}

export default JobContext