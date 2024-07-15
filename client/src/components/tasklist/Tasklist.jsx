import React from 'react'
import './tasklist.css'
import { Link } from 'react-router-dom'



const tasks=[
	{title:"Add job to my job tracker ",
	description:"Bookmark jobs from your favorite job boards using Teal’s Chrome Extension or add them manually.",
	buttonText: "Add Manually",
	buttonLink:"/jobtracker"


},

{title:"Add company details to my job tracker ",
	description:"Save  your dream  company details and track the company .",
	buttonText: "Add Manually",

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