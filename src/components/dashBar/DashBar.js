import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Inventory} from '../../styles/svg/icons/inventory-icon.svg'
import {ReactComponent as Add} from '../../styles/svg/icons/add-icon.svg'
import './dashBar.component.css'
export default function DashBar() {
  return (
    <div class="sidebar text-cadet bg-isabelline w-64 space-y-6 py-7 px-2 absolute mr-3 inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
  
  
            
            <nav>
                
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Inventory
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                   Add a Stand
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                   Sales Reports
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Employee Profiles
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Customer Profiles
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Suppliers
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Orders
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Reviews
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Brands
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Reviews
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Warehouse 
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "></Inventory>
                    Manager Reports
                </Link>
                <a href="write.html" class="block py-2.5 px-4  hover:text-darkPurple hover:font-bold ">
                <img src="static/svg/icons/add-icon.svg" class=" inline object-contain h-7 w-7 mx-2" alt=""/>
                Add Cake Stand
                </a>
                <a href="#sf" class="block py-2.5 px-4  hover:text-darkPurple hover:font-bold ">
                <img src="static/svg/icons/report-icon.svg" class=" inline object-contain h-7 w-7 mx-2" alt=""/>
                Sales Reports
                </a>
                <a href="#sfse" class="block py-2.5 px-4 0 hover:text-darkPurple hover:font-bold ">
                {/* <img src="static/svg/icons/customer-profile-icon.svg" class=" inline object-contain h-7 w-7 mx-2" alt=""/> */}
                Profiles
                </a>
            </nav>
        </div>
  )
}
