// import Button from './components/button/Button'
import React from 'react'
import {Routes,  Route} from 'react-router-dom'


// import {LoginPage, DashBoardPage, PageNotFound} from './pages'
import LoginPage from './pages/loginpage/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import PageNotFound from './pages/404/PageNotFound';

// import AllProductView from 'pages/dashboard/dashboard-views/AllProducts/AllProductView.js';
// import EditProducts from 'pages/dashboard/dashboard-views/EditProduct/EditProductsView.js';
import AllProducts from 'pages/dashboard/dashboard-views/AllProducts/AllProducts';
import AddProductView from 'pages/dashboard/dashboard-views/AddProductView/AddProductView';
import EditProductsView from 'pages/dashboard/dashboard-views/EditProduct/EditProductsView';
// import './styles/global-styles.css'
function App() {
 
  return (
      <>
      <Routes>
      
      
        
          <Route index element={<LoginPage/>}/>
          <Route Route path='dashboard/' element={<DashBoard/>}>
           
            <Route index path='all' element={<AllProducts title="All Cake Stands"/>}/>
            <Route path='edit' element={<EditProductsView title="Edit A cake Stand"/>}/>
            <Route path='add' element={<AddProductView title="Add a Cake Stand"/>}/>
            
          </Route>
          <Route path="*" title="Unknown Page" element={<PageNotFound/>}/>
  
      </Routes>
      </>
  );
}

export default App;

 
 