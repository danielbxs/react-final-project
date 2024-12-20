import CartProductItem from "./CartProductItem";

export default function CartProductList({ products }) {
  return (
    <ul className="cart-list">
      {products.map((product) => (
        <CartProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
