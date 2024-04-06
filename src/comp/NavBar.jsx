import cartSlice from "../fr/cart/cartSlice";
import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { amount } = useSelector((z) => z.cart);
  // const { cartItems } = useSelector((store) => store.cart);
  // const { id, title, price, img, amount } = cartItems;
  // console.log(cartItems);
  // console.log(id);
  return (
    <nav>
      <div className="nav-center">
        <h3>store cart</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
