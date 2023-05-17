import React from 'react'
import { NavLink } from 'react-router-dom'
import rocket from "../Images/Rocket.svg"


const Commun = (props) => {
  return (
    <>
 <section id='Header' className='d-flex align-items-center'>
 <div className='container-fluid nav_bg'>
         <div className='row'>
             <div className='col-10 mx-auto'>
             <div className='row'>
                 <div className='col-md-6 pt-5 pt-lg-2 order-2 order-lg-1 d-flex justify-content-centern flex-column'>
                     <h1>{props.name} <strong className='brand-name'> thapaTecnical </strong> </h1>
                     <h2 className='my-3'> We are the team of telented developer making websites  </h2>
                     <div className='mt-3'>
                         <NavLink to={props.visit} href="" className='btn btn-outline-primary'>{props.btnName}</NavLink>
                     </div>
                 </div>
           
             <div className='col-lg-6 order-1 order-lg-2 Header-img'>
                 <img src={props.imgsrc} alt="Img" className='img-fluid animeted' />
             </div>
             </div>
             </div>
         </div>
         </div>
 </section>
 
    </>
   )
}

export default Commun;