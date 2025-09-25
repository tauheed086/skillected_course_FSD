import { createSlice } from "@reduxjs/toolkit";
import cartData from '../data'
const initialState = {
  cartData: cartData,
  cartProductsQuantity:1,
  cartProductsTotalPrice:0
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
      clearCart: (state) => {
        state.cartData = []
      },
      removeItem:(state, actions)=>{
        state.cartData = state.cartData.filter((item) => {
          return item.id !== actions.payload
        })
      },
      increase:(state, action) => {
        const cartItem = state.cartData.find(item => item.id == action.payload)
        cartItem.quantity += 1
      },
      decrease:(state, action) => {
        const cartItem = state.cartData.find(item => item.id == action.payload)
        cartItem.quantity -= 1
      },
      
      calculateTotals:(state) => {
        let cartAmount = 0;
        let totalPrice = 0;
        state.cartData.forEach((product) => {
          cartAmount = cartAmount + product.quantity;
          totalPrice = totalPrice + product.price * product.quantity;
        });
        state.cartProductsQuantity = cartAmount;
        state.cartProductsTotalPrice = totalPrice.toFixed(2);
      }
    }
})

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;