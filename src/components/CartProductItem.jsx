import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  removeProductFromCart,
} from "../store/cartSlice";

export default function CartProductItem({ product }) {
  const { id, name, price, quantity, description, imageUrl } = product;
  const dispatch = useDispatch();
  function handleRemoveItemFromCart() {
    dispatch(removeProductFromCart(id));
  }
  function handleIncrementItem() {
    dispatch(incrementItemQuantity(id));
  }
  function handleDecrementItem() {
    dispatch(decrementItemQuantity(id));
  }
  return (
    <li className="cart-item">
      <img src={imageUrl} alt={name} className="cart-item-img" />

      <div className="cart-item-info-box">
        <h3 className="cart-item-title">{name}</h3>
        <div className="cart-item-up">
          <p className="cart-item-unit-price">Unit Price</p>
          <span className="cart-item-price">${price}</span>
        </div>
        <div className="cart-item-qc">
          <div className="cart-item-controls">
            <p>Quantity</p>
            <div className="cart-item-c-btns">
              <button className="control-btn" onClick={handleDecrementItem}>
                -
              </button>
              <span className="cart-item-quantity">{quantity}</span>
              <button className="control-btn" onClick={handleIncrementItem}>
                +
              </button>
            </div>
          </div>
        </div>
        <span className="cart-item-total">Total: ${price * quantity}</span>
        <button className="delete-btn" onClick={handleRemoveItemFromCart}>
          Delete
        </button>
      </div>
    </li>
  );
}
