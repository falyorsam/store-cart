import Navbar from "./comp/NavBar";
import { calculateTotals, getCartItems } from "./fr/cart/cartSlice.jsx";
import CartContainer from "./comp/CartContainer.jsx";
import Modal from "./comp/Modal.jsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems());
  }, []);
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}

      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
