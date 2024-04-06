import React from "react";
import { ChevronDown, ChevronUp } from "../icons";
import { useDispatch } from "react-redux";

const CartItem = ({
  item,
  removeItem,
  decrease,
  increase,
  calculateTotals,
}) => {
  const dispatch = useDispatch();
  const { img, title, amount, price, id } = item;
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button onClick={() => dispatch(removeItem(id))} className="remove-btn">
          remove
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increase(id));
            dispatch(calculateTotals());
          }}
          className="amount-btn"
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              dispatch(calculateTotals());
              return;
            }
            dispatch(decrease(id));
            dispatch(calculateTotals());
          }}
          className="amount-btn"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
