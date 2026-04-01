import {use} from "react"
import ProductCard from "../ProductCard/ProductCard";

const Products = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);

  return (
    <div className="bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
