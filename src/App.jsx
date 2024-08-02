import { useState } from 'react'
import Navbar from './Components/Navbar'
import MediaControlCard from './Components/MediaControlCard'
import MediaControlCard2 from './Components/MediaControlCard2'
import Card3 from './Components/Card3'
import Courses from './Components/Courses'
import Multi from './Components/Multi'
import Form from './Components/Form'
import Footer from './Components/Footer'

import './App.css'


function App() {
  

  return (
    <>
     <Navbar/> 
     <MediaControlCard/>
     <MediaControlCard2/>
     <Card3/>
     <Courses/>
     <Multi/>
     <Form/>
     <Footer/>
    </>
  )
}

export default App
