import {Routes, Route, Link} from 'react-router'
import {useState, useEffect} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import StudentPage from './pages/StudentPage'
import StudentDetails from './pages/StudentDetails'
import NavBar from './components/NavBar'
import './App.css'

function App() {
  return (
    <>
    <div>
  <h2>Welcome to Student Dashboard</h2>
  <p>This app demonstrates React Router, useState, and useEffect.</p>
  </div>
    <nav>
      <Link to="/">Home</Link> |
        <Link to="/About">About</Link> |
        <Link to="/StudentDetails">Student Details</Link> |
        <Link to="/StudentPage">Student Page</Link> |
    </nav>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="About" element={<About/>}/>
    <Route path="/StudentPage" element={<StudentPage/>}/>
    <Route path="/StudentDetails" element={<StudentDetails/>}/>
    </Routes>
    </>
  )
}

export default App
