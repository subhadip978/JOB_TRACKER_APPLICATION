import React from 'react'
import { useState } from 'react'

import Tasklist from '../../components/tasklist/Tasklist'
import Footer from '../../components/footer/Footer'
import './home.css'


const Home = () => {

	
  return (
	<div className="App">
		<div className="container">
			<div className="progress">
						<h2>GETTING STARTED</h2>
						<Tasklist />

			</div>
		</div>
			<div>
				<Footer />
				</div>
	</div>
  )
}

export default Home