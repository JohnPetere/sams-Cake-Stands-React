// import { className } from 'postcss-selector-parser'
import React from 'react'
// import Icon from 'react-svg-use'
// import './styles/global-styles.css'

 import { Link, useNavigate } from 'react-router-dom'
 import "typeface-dancing-script"
import { ReactComponent as Logo } from '../../styles/svg/branding/cake-logo.svg'
export default function LoginPage() {
 
    let navigation = useNavigate();
    
    function goToDash(e){
        e.preventDefault();
        console.log("goToDash")
       navigation('dashboard')
    }
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
    
 
   <div className="flex justify-center items-center w-full h-screen">
	<div className=" w-full h-full"><img className='w-full h-full' src="https://cdn.pixabay.com/photo/2021/05/18/07/56/cakes-6262577_960_720.jpg" alt="Supposed to be fancy cakes"></img></div>
	<form className="item w-full h-full flex flex-col" >
        <h2 className=" text-5xl font-dancingScript
          text-fieryRose mr-6
         
           hover:text-darkPurple my-10">Sam's cake Stand</h2>
        <Logo className='w-20 h-20'/>
        <div className='login-form'>
                    <label className='form-label' for="grid-first-name">
                    Email
                    </label>
                    <input className="form-text" 
                    id="productTitle" type="text" placeholder="enter Email" required/>
                    
        </div>
        <div className='login-form'>
                    <label className='form-label' for="grid-first-name">
                    Password
                    </label>
                    <input className="form-text" 
                    id="productTitle" type="password" placeholder="password" required/>
                    
        </div> 
        
        <button onClick={goToDash} id="buy-button" type="submit" class=" bg-aeroBlue  text-darkPurple hover:text-fieryRose font-bold py-5 px-40 mt-3 rounded-full hover:bg-white ">
       Login 
            
                </button>      
                <a href='#forgetPassword' className='text-cadet text-md mt-10'>Forget Password?</a>
    </form>
 
    </div>
   </>
  )
}


/**
 *   aeroBlue:'#D7FDF0',
        cadet: '#556F7A',
        fieryRose: '#FF5D73',
        darkPurple: '#4B2142',
        pinkLavender: '#D4AFCD',
        isabelline: '#EEE6E6',
        reallyRed: '#FF0000'
 */