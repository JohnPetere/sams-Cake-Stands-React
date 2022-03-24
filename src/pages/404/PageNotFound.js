import React, {useState} from 'react'
import {Link} from 'react-router-dom'
// import './styles/global-styles.css'
import { ReactComponent as Logo } from '../../styles/svg/branding/cake-logo.svg'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from 'libs/firebase'

export default function PageNotFound() {
  const [isUser, setIsUser] = useState(false)
     
     onAuthStateChanged(auth, (user)=>{
         if(user){
             setIsUser(false)
         }else{
             setIsUser(true)
         }
     })
  return (
    <>
      <main className='flex flex-col justify-center w-full h-screen bg-isabelline items-center text-center'>
        <div className=' w-1/2 h-1/2 flex flex-col justify-center '>
        <h1 className=' font-extrabold text-8xl text-darkPurple font-dancingScript'> 404</h1>
        <Logo className='w-20 h-20 m-auto my-6' />
        {
        
         isUser?    <p className='text-cadet'>Page not found... <Link className='underline' to='/'>Click here to login</Link></p>   
         :        <p className='text-cadet'>Page not found... <Link className='underline' to='/dashboard'>Back to Dashboard?</Link></p>
       
        }
        </div>
        
      </main>

  </>
  )
}
/**
 * TODO: 
 *  - create TOP BAR
 *  - create DASHBOARD SIDE BAR
 *  - CREATE LOGIN PAGE
 *  - CREATE WORKING NAVIATION
 * 
 */