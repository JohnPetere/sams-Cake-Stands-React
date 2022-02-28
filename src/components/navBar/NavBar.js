import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../styles/svg/branding/cake-logo.svg'
import {ReactComponent as Logout} from '../../styles/svg/icons/logout-icon.svg'
import {ReactComponent as Email} from '../../styles/svg/icons/email-icon.svg'
import {ReactComponent as Settings} from '../../styles/svg/icons/settings-icon.svg'
import {ReactComponent as Note} from '../../styles/svg/icons/note-icon.svg'
import {ReactComponent as Avatar} from '../../styles/svg/icons/avatar-icon.svg'
    
function NavBar() {
  return (
    <>
     <header class="flex-col">
      <nav class="flex items-center justify-between flex-wrap bg-aeroBlue p-6 ">
        <div class="flex items-center flex-shrink-0 text-fieryRose mr-6 hover:text-darkPurple">
         <Logo className="object-contain  h-10 w-10 mx-3" alt="LOGO"/>
     
  
          <Link  to='/' class="font-bold text-2xl sm:text-2xl font-dancingScript ">Sams Cake Stand</Link>
         
        </div>
        <div class=" bg-aeroBlue flex justify-between md:hidden">
    
          <button class="mobile-menu-button p-2 focus:outline-none ">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      <div>
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