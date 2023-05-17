import React from 'react'
import { NavLink } from 'react-router-dom'
import web from "../Images/Rocket.svg"
import Commun from './Commun'


const About = () => {
  return (
    <>
      <Commun
        name="Welcome to about page"
        imgsrc={web}
        visit="/contect"
        btnName="Contect Now "

      />

    </>
  )
}

export default About