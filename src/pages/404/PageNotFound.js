import React from 'react'
import {Link} from 'react-router-dom'
// import './styles/global-styles.css'
 

export default function PageNotFound() {
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
        <h1>
            Page Not FOund
        </h1>
    </header>
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