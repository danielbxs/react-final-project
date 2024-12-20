import ProductItem from "./ProductItem";

export default function ProductList({ products, category }) {
  return (
    <>
      <div className="category-box">
        <h2 className="products-category">{category}</h2>
        <div className="category-divisor"></div>
      </div>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </>
  );
}
