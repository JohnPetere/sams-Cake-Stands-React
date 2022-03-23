
import React from 'react'


 import {  useNavigate } from 'react-router-dom'
 import "typeface-dancing-script"
import { ReactComponent as Logo } from '../../styles/svg/branding/cake-logo.svg'
import {auth} from './../../libs/firebase'
export default function LoginPage() {
 
    let navigation = useNavigate();
    
    function goToDash(e){
        e.preventDefault();
        console.log("goToDash")
       navigation('dashboard')
       
    }
   console.log("LOGIN PAGE", auth)
  return (
    <>

 
   <div className="flex justify-center flex-row items-center w-full h-screen bg-backgroundGreg ">
     <div className=' w-5/6 h-7/8 flex   justify-center align-baseline rounded-3xl  '>
	<div className="  w-1/2 h-auto shadow-inner "><img className='w-full h-full rounded-l-lg' src="https://cdn.pixabay.com/photo/2021/05/18/07/56/cakes-6262577_960_720.jpg" alt="Supposed to be fancy cakes"></img></div>
	<form className="item w-1/2 h-auto flex flex-col rounded-none rounded-r-lg shadow-inner" >
        <h2 className=" text-6xl font-extrabold font-dancingScript
          text-fieryRose mr-6
          
           hover:text-darkPurple my-10">Sam's cake Stand</h2>
        <Logo className='w-16 h-16'/>
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
        
        <button onClick={goToDash} id="buy-button" type="submit" className=" bg-aeroBlue  text-darkPurple hover:text-fieryRose font-bold py-5 px-40 mt-3 rounded-full hover:bg-white ">
       Login 
            
                </button>      
                <a href='#forgetPassword' className='text-cadet text-sm mt-5'>Forget Password?</a>
    </form>
    </div>
    </div>
   </>
  )
}

