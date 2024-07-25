import React from 'react'
import './tasklist.css'
import { Link } from 'react-router-dom'



const tasks=[
	{title:"Add job details to my job tracker ",
	description:"Save jobs from your favorite job boards using ",
	buttonText: "Add Manually",
	buttonLink:"/jobtracker"


},

{title:"Search  your dream job",
	description:"Save  your dream  company details and track the company .",
	buttonText: "Let's search",
	buttonLink:"/jobsearch"

},


]
const Tasklist = () => {
  return (
	<div className='task-container'>
		{tasks.map((task,i)=>(
			<div className="task-item" key={i}>
				<h3>{task.title}</h3>
     			 <p>{task.description}</p>
				 <Link to={task.buttonLink}>
				 <button className='task-button'>{task.buttonText}</button>
				 </Link>
			</div>

		))}


	</div>
  )
}

export default Tasklist