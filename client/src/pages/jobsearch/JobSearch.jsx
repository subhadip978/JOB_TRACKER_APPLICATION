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
	const [filters, setFilters] = useState({
		salary: '',
		jobtype: '',
		location: ''
	  });
	  const [showFilters, setShowFilters] = useState(false);

	const searchJobs=async(req,res)=>{
		try{
			console.log(search);
			const {data}=await axios.post("api/job/searchAllJoblists",({search,title}),{withCredentials:true})
			console.log(data);
			setJobList(data)
			console.log(jobList);


		}catch(err){
			toast({
				title: 'Job search failed',
					description: 'unable to search jobs',
					status: 'success',
					duration: 5000,
					isClosable: true,
		  
		  
			  })

		}}



	const fetchJobs=async(req,res)=>{
		try{
			console.log(search);
			const {data}=await axios.get("api/job/getAllJoblists",{withCredentials:true})
			console.log(data);
			setJobList(data)
			console.log(jobList);

			toast({
				title: 'Explore your dream job ',
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
		searchJobs();
	  }
	  useEffect(() => {
		console.log(jobList);
	  }, [jobList]);
	
	 

	  const handleFilter = async() => {
		try{
			const {data}=await axios.post("/api/job/filterJobs",{withCredentials:true})
			console.log(data);
			setJobList(data);
			
			toast({
				title: 'Explore your dream job ',
					description: 'here is the relatable  jobs',
					status: 'success',
					duration: 5000,
					isClosable: true,
		  
		  
			  })
	
	
		}catch(err){
			console.log(err);
		toast({
				title: 'failed',
				description: 'unable to filter jobs',
				status: 'success',
				duration: 5000,
				isClosable: true,
	  
	  
		  })
	
		}
	  };

	  const handleChange=(e)=>{

		setFilters((prev)=>({...prev,[e.target.name]:e.target.value}))

	  }


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
			<button	className='btn' onClick={handleSearch}>SEARCH</button>
			</div>
			</div>



		<div className="jobsection">
		<div className='filtersection'>
			 <button className='btn' onClick={handleFilter}>FILTERS</button>
		
		 <div className='primaryfiltersection'>
			<select name="type"  onChange={handleChange}>
          <option value="all">jobtype</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
        </select>

		<select name="type"  onChange={handleChange}>
          <option value="all">Salary</option>
          <option value="0-100000">0-1L</option>
          <option value="100001-500000">1L - 5L</option>
          <option value="500001-1000000">5L - 10L</option>
        </select>

		<select name="type"  onChange={handleChange}>
          <option value="all">Location</option>
          <option value="remote">remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Onsite">Onsite</option>
        </select>
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



	</div>
  )
}

export default JobSearch