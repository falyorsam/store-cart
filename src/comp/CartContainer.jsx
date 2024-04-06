import React from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeItem,
  decrease,
  increase,
  calculateTotals,
} from "../fr/cart/cartSlice";
import { openModal } from "../fr/modal/ModalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  console.log(total);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">your cart is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((items) => {
          return (
            <CartItem
              calculateTotals={calculateTotals}
              decrease={decrease}
              removeItem={removeItem}
              item={items}
              increase={increase}
              key={items.id}
            />
          );
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
