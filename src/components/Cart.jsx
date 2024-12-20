import { useDispatch, useSelector } from "react-redux";
import CartProductList from "./CartProductList";
import { Link } from "react-router";
import { clearCart } from "../store/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const totalCartPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalProducts = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  function handleClearCart() {
    dispatch(clearCart());
  }
  return (
    <section className="page-section">
      <h1 className="page-title">Your Shopping Cart</h1>

      <div className="cart-content">
        {cartItems.length > 0 && (
          <div className="cart-info">
            <p className="cart-total">{totalProducts} products</p>
            <p className="cart-total">Total price: ${totalCartPrice}</p>
            <button onClick={handleClearCart} className="cart-clear">
              Clear cart
            </button>
          </div>
        )}
        {cartItems.length > 0 ? (
          <>
            <CartProductList products={cartItems} />
            <div className="cart-more-options-box">
              <Link to="/products" className="continue-shopping">
                &larr; Continue Shopping
              </Link>
              <Link to="/checkout" className="checkout">
                Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="empty-cart-box">
            <p className="empty-cart">
              Your cart is currently empty
              <Link to="/products">Start browsing our products</Link>
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
