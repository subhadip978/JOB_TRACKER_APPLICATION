import React from 'react'
import './jobsearch.css'






// const joblist=[
// 	{
// 		title:"ML ENGINEER",
// 		company:"oracle",
// 		location:"London",
// 		posted:"posted 4 months ago"

// 	},

// 	{
// 		title:"SDE",
// 		company:"Google",
// 		location:"BANAGALORE",
// 		posted:"6 months ago"
// 	},
// 	{
// 		title:"SDE",
// 		company:"Google",
// 		location:"BANAGALORE",
// 		posted:"6 months ago"
// 	}
// ]

const JobSearch = () => {
  return (

	<div>

	<div className='jobsearch'>

		<div className='primary-jobsearch'>
				<h2>JOB SEARCH</h2>
					<input type="text" placeholder="Search by title, keyword, or company" name="" id="" />
		</div>

		<div className='primary-jobsearch'>
			<h2>TARGET JOB TITLE</h2>
			<input type="text"  placeholder='enter job role'/>
		</div>

		<div className="filters">
			<button	className='btn'>Filters</button>
			<button	className='btn'>Sort</button>
		</div>

		</div>


<div className="joblist">
	

		{joblist.map((job,i)=>(
			<div className='job-item' key={i}>
				<h2>{job.title}</h2>
				<p>{job.company}   -  {job.location}</p>
				<p>{job.posted}</p>
				


			</div>
		))}
</div>








	
	</div>
  )
}

export default JobSearch