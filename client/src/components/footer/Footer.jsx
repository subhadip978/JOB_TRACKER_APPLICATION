import React from 'react'
import './footer.css'

import CreateJobModel from '../dialog/CreateJobModel'


const Footer = () => {
  return (
	<div className='footer'>

			<div className='primary-footer'>
				<ul>
					<li><CreateJobModel/></li>
					
					<li>About</li>
					<li>Help Centre</li>
					<li>Guidlines</li>
				</ul>

			</div>

	</div>
  )
}

export default Footer