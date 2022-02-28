import React from 'react'
// import './styles/global-styles.css'
 import { Link } from 'react-router-dom'
export default function LoginPage() {
  return (
    <>
    <nav>
       <ul>
         <li>
           <Link to="/">Login Page</Link>
         </li>
         <li>
           <Link to="/dashboard">DashBoard Page</Link>
         </li>
       </ul>
     </nav>
   <header>
       <h1 className='h1-test'>
           LOGIN PAGE HERE
       </h1>
   </header>
   </>
  )
}
