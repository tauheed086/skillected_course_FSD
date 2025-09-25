import { FaMinus, FaPlus } from "react-icons/fa";
import { removeItem, increase , decrease, calculateTotals} from "./cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id,title,img,price,quantity }) => {

  const dispatch = useDispatch();
  return (
    <>
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>remove</button>
      </div>
      <div>
      <button className="amount-btn" onClick={() => dispatch(increase(id))}><FaPlus/></button>
      <p className="amount">{quantity}</p>
      <button className="amount-btn" onClick={() => {
        if(quantity === 1){
          dispatch(removeItem(id))
          return;
        }
        dispatch(decrease(id))
        }}><FaMinus/></button>
      </div>
    
    </article>
    <hr />
    </>
  )
}

export default CartItem