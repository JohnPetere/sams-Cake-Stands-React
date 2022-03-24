// import Button from './components/button/Button'
import React from 'react'
import {Routes,  Route} from 'react-router-dom'


// import {LoginPage, DashBoardPage, PageNotFound} from './pages'
import LoginPage from './pages/loginpage/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import PageNotFound from './pages/404/PageNotFound';

import AllProducts from 'pages/dashboard/dashboard-views/AllProducts';
import EditProducts from 'pages/dashboard/dashboard-views/EditProducts';
import AddProduct from 'pages/dashboard/dashboard-views/AddProduct';

// import './styles/global-styles.css'
function App() {
 
  return (
      <>
      <Routes>
      
      
        
          <Route index element={<LoginPage/>}/>
          <Route Route path='dashboard' element={<DashBoard/>}>
           
            <Route index path='all' element={<AllProducts title="All Cake Stands"/>}/>
            <Route path='edit' element={<EditProducts title="Edit A cake Stand"/>}/>
            <Route path='add' element={<AddProduct title="Add a Cake Stand"/>}/>
            
          </Route>
          <Route path="*" title="Unknown Page" element={<PageNotFound/>}/>
  
      </Routes>
      </>
  );
}

export default App;

 
 