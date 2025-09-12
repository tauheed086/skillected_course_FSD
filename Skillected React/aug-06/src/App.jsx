import './App.css'
import Navbar from './components/Navbar'
import Other from './components/Other'
import UserContextProvider from '../src/UserContextProvider'
import Form from './components/Form'
import UseStateHook from './components/UseState'
import CustomHook from './components/CustomHook'
import Counter2 from './components/Counter2'
import MyCounter from './components/MyCounter'
function App() {


  return (
    <>
    <UserContextProvider>
     <Navbar /><br /><br />
     <MyCounter />
      {/* <Form />
      <Other /><br /><br /> */}
     </UserContextProvider>
    </>
  )
}

export default App
