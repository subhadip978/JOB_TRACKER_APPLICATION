import React from 'react'
import './jobsearch.css'
import { useContext } from 'react'
import { useState,useEffect } from 'react'
// import  { JobListContext } from '../../context/JobContext'

import { useToast } from '@chakra-ui/react'
import axios from 'axios'


const JobSearch = () => {

	const toast=useToast()
	const [search,setSearch]=useState('');
	const [title,setTitle]=useState('');
	// const {jobList}=useContext(JobListContext);
	const [jobList, setJobList] = useState([]);

	const fetchJobs=async()=>{
		try{
			console.log(search);
			const {data}=await axios.post("api/job/searchAllJoblists",({search,title}),{withCredentials:true})
			console.log(data);
			setJobList(data)
			console.log(jobList);

			toast({
				title: 'Job search successfull',
					description: 'here is the relatable  jobs',
					status: 'success',
					duration: 5000,
					isClosable: true,
		  
		  
			  })


		}catch(err)
{
	console.log(err);
	toast({
		title: 'Job search failed',
			description: 'unable to search jobs',
			status: 'success',
			duration: 5000,
			isClosable: true,
  
  
	  })

}	}

useEffect(()=>{
  fetchJobs();

},[])

	const handleSearchChange = (e) => {
		setSearch(e.target.value);
	  };
	
	  const handleTitleChange = (e) => {
		setTitle(e.target.value);
	  };

	  const handleSearch=()=>{
		fetchJobs();
	  }
	  useEffect(() => {
		console.log(jobList);
	  }, [jobList]);
	


  return (

	<div>

	<div className='jobsearch'>

		<div className='primary-jobsearch'>
				<h2>JOB SEARCH</h2>
					<input 
					type="text"
					value={search}
					placeholder="Search by title, keyword, or company"
					onChange={handleSearchChange}

					 name="" id="" />
		</div>

		<div className='primary-jobsearch'>
			<h2>TARGET JOB TITLE</h2>
			<input type="text" 
			 placeholder='enter job role'
			 value={title}
			 onChange={handleTitleChange}
			 />

		</div>

		<div className="filters">
			<button	className='btn' onClick={handleSearch}>Filters</button>
			<button	className='btn'>Sort</button>
		</div>

		</div>


<div className="joblist">
	

		{jobList.length>0 ? (jobList.map((job,i)=>(
			<div className='job-item' key={i}>
				<h2>{job.title}</h2>
				<p>{job.company}   -  {job.location}</p>
				<p>{job.posted}</p>
				


			</div>
		))):(
			<div>
				no job posted
			</div>


		)}
</div>








	
	</div>
  )
}

export default JobSearch