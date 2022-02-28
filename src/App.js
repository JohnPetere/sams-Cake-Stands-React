// import Button from './components/button/Button'
import {Route, Routes} from 'react-router-dom'
// import {LoginPage, DashBoardPage, PageNotFound} from './pages'
import LoginPage from './pages/loginpage/LoginPage';
import DashBoard from './pages/dashboard/DashBoard';
import PageNotFound from './pages/404/PageNotFound';
// import './styles/global-styles.css'
function App() {
 
  return (
      <>
       <Routes>
          <Route index element={<LoginPage/>}/>
          <Route path="dashboard" element={<DashBoard/>}/>
          <Route path="*" element={<PageNotFound/>}/>
          
        </Routes>
      </>
  );
}

export default App;

 
 