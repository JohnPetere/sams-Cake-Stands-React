import React from 'react'
// import './styles/global-styles.css'
//  import { Link } from 'react-router-dom'
import NavBar from '../../components/navBar/NavBar'
import DashBar from '../../components/dashBar/DashBar'
import ShopCard from '../../components/shopCard/ShopCard'
 export default function DashBoard() {
 

  // btn.addEventListener("click", () => {
  //   sidebar.classList.toggle("-translate-x-full");
  // });
  
  return (
      <>
    
      <NavBar/>
      <div className="relative min-h-screen md:flex">
       
       
      <DashBar/>
      <ShopCard/>
      
    </div>
    
  </>
  )
}
