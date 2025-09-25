import './App.css'
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { calculateTotals } from './cart/cartSlice'

function App() {
  const dispatch = useDispatch();
  const {cartData} = useSelector((store) => store.cart)
  
  useEffect(() => {
    dispatch(calculateTotals())
  },[cartData])


  return (
    <>
    <Navbar />
    <CartContainer />
    </>
  )
}

export default App
