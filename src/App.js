// import Button from './components/button/Button'
import React from 'react'
import {Route} from 'react-router-dom'


// import {LoginPage, DashBoardPage, PageNotFound} from './pages'
import LoginPage from './pages/loginpage/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import PageNotFound from './pages/404/PageNotFound';
import { Routes } from 'react-router';

// import './styles/global-styles.css'
function App() {
 
  return (
      <>
      <Routes>
      
      
        
          <Route index element={<LoginPage/>}/>
          <Route path="dashboard" element={<DashBoard/>}>
            {/* <Route index/>
            <Route /> */}
          </Route>
          <Route path="*" element={<PageNotFound/>}/>
  
      </Routes>
      </>
  );
}

export default App;

 
 