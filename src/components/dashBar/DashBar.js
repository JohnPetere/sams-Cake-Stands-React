import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Inventory} from '../../styles/svg/icons/sideBar-icons/inventory-icon.svg'
import {ReactComponent as Add} from '../../styles/svg/icons/sideBar-icons/add-icon.svg'
import {ReactComponent as Report} from '../../styles/svg/icons/sideBar-icons/report-icon.svg'
import {ReactComponent as CustomerProfile} from '../../styles/svg/icons/sideBar-icons/customer-profile-icon.svg'
import {ReactComponent as EmployeeProfile} from '../../styles/svg/icons/sideBar-icons/employee-icon.svg'
import {ReactComponent as Supply} from '../../styles/svg/icons/sideBar-icons/supply-icon.svg'
import {ReactComponent as Orders} from '../../styles/svg/icons/sideBar-icons/order-icon.svg'
import {ReactComponent as Edit} from '../../styles/svg/icons/sideBar-icons/review-icon.svg'
// import {ReactComponent as Review} from '../../styles/svg/icons/sideBar-icons/review-icon.svg'
// import {ReactComponent as Brand} from '../../styles/svg/icons/sideBar-icons/brand-icon.svg'
import {ReactComponent as Brand} from '../../styles/svg/icons/sideBar-icons/brand-icon.svg'
import {ReactComponent as ManagerReports} from '../../styles/svg/icons/sideBar-icons/manager-reports-icon.svg'
import {ReactComponent as DemoIcon} from '../../styles/svg/icons/sideBar-icons/demo-icon.svg'
import {ReactComponent as CustomerReview} from '../../styles/svg/icons/sideBar-icons/customer-review.svg'

import './dashBar.component.css'
export default function DashBar() {
    
  return (
    <div className="side-bar ">
  
  
            
            <nav>
                
                <Link to={'/'} className="side-bar-item">
                    <Inventory className="side-bar-icon "/>
                   View Inventory
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Add className="side-bar-icon "/>
                   Add a Stand
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Edit className="side-bar-icon "/>
                    Edit Stands
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Report className="side-bar-icon "/>
                   Sales Reports
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <CustomerProfile className="side-bar-icon "/>
                    Customer Profiles
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <EmployeeProfile className="side-bar-icon "/>
                    Employee Profiles
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Supply className="side-bar-icon "/>
                    Suppliers
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <Orders className="side-bar-icon "/>
                    Orders
                </Link>
                
                <Link to={'/'} className="side-bar-item">
                    <Brand className="side-bar-icon "/>
                    Brands
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <CustomerReview className="side-bar-icon "/>
                    Customer Reviews
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <DemoIcon className="side-bar-icon "/>
                    Demo Requests
                </Link>
                <Link to={'/'} className="side-bar-item">
                    <ManagerReports className="side-bar-icon "/>
                    Manager Reports
                </Link>
     
            </nav>
        </div>
  )
}
