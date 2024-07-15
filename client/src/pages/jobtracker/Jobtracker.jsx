import React from 'react'
import JobModel from '../../components/dialog/JobModel'

import { useState } from 'react'


const Jobtracker = () => {
  const[jobs,setJobs]=useState("")
  return (
	<div>
    <p>JOBTRACKER</p>
      <JobModel/>

      <div>


     { jobs.length>0 ?(jobs.map((job,i)=>(

        <div key={i}>
          <span>{job.title}</span>
          <span>{job.company}</span>
          <span>{job.originalJoburl}</span>
          <span>{job.appliedDate}</span>
          


        </div>

      ))):
      (
        <div>
        </div>
      )}
      </div>
     




  </div>
  )
}

export default Jobtracker