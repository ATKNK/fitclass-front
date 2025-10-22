import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login';
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <Router>
      <div className='main'>
        <div className='navbar'>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default App
