import { useSelector,useDispatch } from "react-redux"
import CartItem from "./CartItem"
import { clearCart, calculateTotals } from "./cart/cartSlice"

const CartContainer = () => {
  const dispatch = useDispatch();
  // useSelector((cartProductsQuantity, cartData, cartProductsTotalPrice) => store.cart)

  const { cartProductsQuantity, cartData, cartProductsTotalPrice } = useSelector((store) => store.cart)


  if (cartProductsQuantity < 1) {
    return (
      <section className="cart">
        <h1>Cart is Empty</h1>
      </section>)}
  // console.log(cartProductsQuantity, cartData, cartProductsTotalPrice)

  return (
    <section>
      <header>
        <h2>Cart Items</h2>
      </header>

      <div>
        {cartData.map((item) => {
      return <CartItem key={item.id} {...item} />
    })}
      </div>

      <footer>
        <hr />
        <div className="cart-total">
          <h4>Total <span> $ {cartProductsTotalPrice}</span></h4>
        </div>

      <button className="btn clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </footer>


    </section>
  )
}

export default CartContainer