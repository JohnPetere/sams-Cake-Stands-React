import React from 'react'
// import './styles/global-styles.css'
//  import { Link } from 'react-router-dom'
import NavBar from '../../components/navBar/NavBar'
import DashBar from '../../components/dashBar/DashBar'
 export default function DashBoard() {
  return (
      <>
    
      <NavBar/>
      <div class="relative min-h-screen md:flex">
          
      <DashBar/>
        

    </div>
    
  </>
  )
}
