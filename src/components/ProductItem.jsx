import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../store/cartSlice";

export default function ProductItem({ product }) {
  const { name, description, price, id, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const productIsInCart = cartItems.some((item) => item.id === id);

  function handleAddProductToCart() {
    dispatch(addProductToCart(product));
  }

  return (
    <li className="product-item">
      <img src={imageUrl} alt={name} className="product-img" />
      <div className="product-info-box">
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <span className="product-price">${price}</span>
        <button
          className={`${productIsInCart ? "btn-disabled" : ""} product-btn `}
          onClick={handleAddProductToCart}
          disabled={productIsInCart}
        >
          {productIsInCart ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </li>
  );
}
