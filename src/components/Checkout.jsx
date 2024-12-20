import { Link } from "react-router";
import { FaRegClock } from "react-icons/fa";

export default function Checkout() {
  return (
    <div className="checkout-box">
      <FaRegClock />
      <h1>Coming Soon</h1>
      <Link to="/products" className="continue-shopping">
        Browse our products
      </Link>
    </div>
  );
}
