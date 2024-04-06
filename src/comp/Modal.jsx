import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../fr/cart/cartSlice";
import { closeModal } from "../fr/modal/ModalSlice";
const modal = () => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>remove all items from your shopping cart</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
              console.log("clear");
            }}
            type="button"
            className="btn confirm-btn"
          >
            confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};

export default modal;
