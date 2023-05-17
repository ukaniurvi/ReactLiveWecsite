import React from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Contect from './Components/Contect'
import Service from './Components/Service'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
<Routes>

      <Route path="/" Component={() => <Home name= "Home"/>} />
      <Route path="/About" Component={() => <About name= "About"/>} />
      <Route path="/Contect" Component={() => <Contect name= "Contect"/>} />
      <Route path="/Service" Component={() => <Service name= "Service"/>} />
      <Route path="*" Component={() => <Home name= "Home"/>} />

</Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App