import { useSelector } from "react-redux";
import ProductList from "./ProductList";

export default function Products() {
  const products = useSelector((state) => state.products);
  const small = products.filter((prod) => prod.category === "small");
  const aromatic = products.filter((prod) => prod.category === "aromatic");
  const bonsai = products.filter((prod) => prod.category === "bonsai");

  return (
    <section className="page-section">
      <h1 className="page-title product-title">Products</h1>
      <span className="products-container"></span>

      <div>
        <ProductList products={small} category="Small Plants" />
        <ProductList products={aromatic} category="Aromatic Plants" />
        <ProductList products={bonsai} category="Bonsai Trees" />
      </div>
    </section>
  );
}
