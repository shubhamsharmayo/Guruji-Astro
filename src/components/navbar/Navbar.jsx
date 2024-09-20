import React from 'react'
import './navbar.css'

const Navbar = ({step,setstep}) => {
   return (<div className='navbar-container'><div className='navbar'>
    <div className={`personal ${step==1?'active':''}`} onClick={()=>setstep(1)}>Personal Information </div>
    <div className={`address ${step==2?'active':''}`} onClick={()=>setstep(2)}>Address</div>
    <div className={`confirm ${step==3?'active':''}`} onClick={()=>setstep(3)}>Confirmation</div>
    </div></div>)
  
}

export default Navbar
