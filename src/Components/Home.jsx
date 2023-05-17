import React from 'react'
import web from "../Images/Rocket.svg"
import { NavLink } from 'react-router-dom'
import Commun from './Commun'


const Home = () => {
    return (
        <>
              <Commun
                 name="Grow your bussiness"
        imgsrc={web}
        visit="/Service"
        btnName="Get Started" />
        </>
    )
}

export default Home;