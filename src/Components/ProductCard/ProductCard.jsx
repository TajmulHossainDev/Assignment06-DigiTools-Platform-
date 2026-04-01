import { useState } from "react";
import { toast } from "react-toastify";

const tagStyles = {
  popular: "bg-violet-100 text-violet-700",
  new: "bg-green-100 text-green-700",
  "best-seller": "bg-orange-100 text-orange-700",
};

const ProductCard = ({ product, carts, setCarts }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    const isFound = carts.find((item) => item.id === product.id);
    if (isFound) {
      toast.error("item already in cart");
      return;
    }

    setCarts([...carts, product]);
    setAdded(true);
    toast.success(`${product.name} added to cart`);
  };
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <span className="text-5xl">{product.icon}</span>
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full ${tagStyles[product.tagType] || "bg-gray-100 text-gray-600"}`}
        >
          {product.tag}
        </span>
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
        <p className="text-gray-500 text-sm mt-1 leading-relaxed">
          {product.description}
        </p>
      </div>

      <ul className="space-y-1 flex-1">
        {product.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-sm text-gray-600"
          >
            <span className="text-violet-500 font-bold">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold text-gray-900">
            {" "}
            ${product.price}{" "}
          </span>
          <span className="text-gray-400 text-sm mb-1"> {product.period} </span>
        </div>
        <button
          onClick={handleAddToCart}
          className={`btn w-full rounded-xl mt-3 font-semibold text-base border-0 transition-all ${added ? "bg-green-500 text-white" : "bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-100"}`}
        >
          {added ? "Added to Cart" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
