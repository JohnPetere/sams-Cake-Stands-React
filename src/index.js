import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global-styles.css'
import "typeface-dancing-script"

import LoginPage from './pages/loginpage/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import PageNotFound from './pages/404/PageNotFound';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
