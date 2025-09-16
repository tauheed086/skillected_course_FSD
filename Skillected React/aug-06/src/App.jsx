import './App.css'
import Navbar from './components/Navbar'
import Other from './components/Other'
import UserContextProvider from '../src/UserContextProvider'
import Form from './components/Form'
import UseStateHook from './components/UseState'
import CustomHook from './components/CustomHook'
import Counter2 from './components/Counter2'
import Profile from './components/Profile'
import MyCounter from './components/MyCounter'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UseEffect from './components/UseEffect'
import Login from './components/Login'
import Signup from './components/Signup'
function App() {


  return (
    <>
    <BrowserRouter>
      <UserContextProvider>
        <Navbar /><br /><br />
        
        <Routes>
          <Route path='/' element={<Profile />}/>
          <Route path='/counter' element={<Counter2 />} />
          <Route path='/form' element={<Form />} />
          <Route path='/useEffect' element={<UseEffect />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        {/* <Form />
        <Other /><br /><br /> */}
      </UserContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
