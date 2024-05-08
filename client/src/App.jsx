import './App.css'
import RegistrationSuccess from './components/Registration/Registration-Success/Registration-Success'
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx'
import UserRegistration from './components/Registration/UserRegistration/UserRegistration.jsx';
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/registration' element={<UserRegistration/>}/>
            <Route path='/registration-success' element={<RegistrationSuccess/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
