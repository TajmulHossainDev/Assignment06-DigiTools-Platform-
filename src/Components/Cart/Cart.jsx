import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (item) => {
    const filtered = carts.filter((c) => c.id !== item.id);
    setCarts(filtered);
    toast.success(`${item.name} removed from cart!`);
  };

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Checkout successful! Your order is confirmed 🎉");
  };

  return (
    <div className="bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto pt-6">
          {carts.length === 0 ? (
            <div className="text-center bg-white border border-dashed border-gray-200 rounded-2xl p-16">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-2xl font-semibold text-gray-400">
                Your cart is empty
              </p>
              <p className="text-gray-400 mt-2 text-sm">
                Browse products and add something!
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4">
                {carts.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex justify-between items-center gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-4xl">{item.icon}</span>
                      <div>
                        <h2 className="text-lg font-bold text-gray-800">
                          {item.name}
                        </h2>
                        <p className="text-sm text-gray-400">{item.period}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-xl font-bold text-violet-600">
                        ${item.price}
                      </div>
                      <button
                        onClick={() => handleRemove(item)}
                        className="btn btn-sm bg-red-100 hover:bg-red-500 text-red-500 hover:text-white border-0 rounded-full transition-all"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 mt-4 flex justify-between items-center">
                <div className="text-xl font-bold text-gray-700">
                  Total ({carts.length} items)
                </div>
                <div className="text-2xl font-bold text-violet-600">
                  ${totalPrice}
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="btn w-full mt-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl text-lg font-semibold shadow-lg shadow-violet-200 border-0"
              >
                Proceed to Checkout →
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
