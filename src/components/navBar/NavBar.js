import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../styles/svg/branding/cake-logo.svg'

import {ReactComponent as Logout} from '../../styles/svg/icons/navBar-Icons/logout-icon.svg'
import {ReactComponent as Email} from '../../styles/svg/icons/navBar-Icons/email-icon.svg'
import {ReactComponent as Settings} from '../../styles/svg/icons/navBar-Icons/settings-icon.svg'
import {ReactComponent as Note} from '../../styles/svg/icons/navBar-Icons/note-icon.svg'
import {ReactComponent as Avatar} from '../../styles/svg/icons/navBar-Icons/avatar-icon.svg'
import './navBar.components.css'    
function NavBar() {
  
  function showDashBar(){
    const sidebar = document.querySelector(".sidebar");

    sidebar.classList.toggle("-translate-x-full");

    }
  return (
    <>
     <header className="flex-col">
      <nav className="flex items-center justify-between flex-wrap bg-aeroBlue p-6  ">
        <div className="  flex items-center flex-shrink-0 text-fieryRose mr-6 hover:text-darkPurple">
         <Logo className=" object-contain  h-10 w-10 mx-3" alt="LOGO"/>
     
  
          <Link  to='/' className="font-dancingScript font-extrabold text-3xl  ">Sams Cake Stand</Link>
         
        </div>
        <div className=" bg-aeroBlue flex justify-between md:hidden">
    
          <button id="mobile-menu-bt" onClick={showDashBar} className="mobile-menu-button p-2 focus:outline-none ">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      <div className=''>
         <Link to='/' className='font-bold'>Sign Out <Logout className="object-contain inline h-5 w-5 mx-3"/></Link>
         <Link to='/dashboard' className='font-bold'> <Email className="object-contain inline h-7 w-7 mx-3"/></Link>
         <Link to='/dashboard' className='font-bold'> <Settings className="object-contain inline h-7 w-7 mx-3"/></Link>
         <Link to='/dashboard' className='font-bold'> <Note className="object-contain inline h-8 w-8 mx-3"/></Link>
         <Link to='/dashboard' className='font-bold'> <Avatar className="object-contain inline h-12 w-12 mx-3"/></Link>
        
      </div>

      </nav>
    


    </header>
    </>
  )
}
export default NavBar