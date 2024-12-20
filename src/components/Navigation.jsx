import { NavLink } from "react-router";
import { FiShoppingCart } from "react-icons/fi";
import { IoLeafSharp } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function Navigation() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((cur, item) => cur + item.quantity, 0);

  return (
    <nav className="navigation">
      <div>
        <NavLink to="/" className="navlink logo-box">
          <IoLeafSharp className="navicon" />
          Paradise Nursery
        </NavLink>
      </div>
      <div className="nav-int-box">
        <div>
          <NavLink to="/products" className="navlink">
            Products
          </NavLink>
        </div>
        <div className="nav-cart-box">
          <NavLink to="/cart" className="navlink">
            {cartCount > 0 && (
              <div className="nav-cart-counter">{cartCount}</div>
            )}
            <FiShoppingCart className="navicon" />
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
