import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import './pages/profile/Profile';
import Navbar from './components/navbar/Navbar'
import Profile from './pages/profile/Profile';

function AppContent() {

  const location = useLocation();

  const hideNavbar = location.pathname === "/login" || location.pathname === "/register"

return (
    <div className='main'>
      {!hideNavbar && (
        <div className='navbar'>
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default function App(){
  return(
    <Router>
      <AppContent/>
    </Router>
  );
}
