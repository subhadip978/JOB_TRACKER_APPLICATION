

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import React from 'react'
import Companies from './pages/companies/Companies';
import Authpage from './pages/authpage/Authpage';
import Jobtracker from './pages/jobtracker/Jobtracker';
import Home from './pages/home/Home';
import JobSearch from './pages/jobsearch/JobSearch';
import './index.css'
const App = () => {
  return (
   <div className="main">


    <Router>

      <Routes>
        <Route path="/" element={<Authpage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/companies" element={<Companies/>}/>
        <Route path="/jobtracker" element={<Jobtracker/>}/>
        <Route path="/jobsearch" element={<JobSearch/>}/>
      </Routes>
    </Router>
   </div>
  )
}

export default App
