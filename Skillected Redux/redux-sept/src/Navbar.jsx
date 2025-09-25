import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

      const {cartProductsQuantity} = useSelector((store) => {
        return store.cart
      })
      // console.log(cartProductsQuantity);

  return (
    <div>
      <nav>
        <div className="nav-center">
          <h3>Redux Toolkit</h3>
          <div className="nav-container">
            <FaShoppingCart className='icon'/>
           
            <div className="amount-conatiner">
              <p className='cart-badge'>{cartProductsQuantity}</p>
            </div>
          </div> 
        </div>
      </nav>
    </div>
  )
}

export default Navbar