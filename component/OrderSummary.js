import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../Stored/Slicer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function OrderSummary() {
  const dispatch = useDispatch();

  // Get all cart items
  const fooddata = useSelector((state) => state.cart.items);

  // Check if cart has any item with quantity > 0
  const hasItemsInCart = fooddata.some((item) => item.quantity > 0);

  // Total price
  const totalPrice = fooddata.reduce(
    (total, item) =>
      total +
      (item.quantity *
        ("defaultPrice" in item ? item.defaultPrice / 100 : item.price / 100) || 0),
    0
  );

  const handleConfirm = () => {
    toast.success("Your order has been placed successfully!");
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      {!hasItemsInCart ? (
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
          <h1 className="text-3xl font-bold text-orange-500 mb-6">
              Order Summary
          </h1>
          <p className="text-gray-700 text-lg">Order Your Favourite Meal</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-orange-500 mb-6">
            Order Summary
          </h1>

          <div className="space-y-4 text-gray-700">
            {fooddata.map((item, index) => {
              if (item.quantity === 0) return null; // skip items with 0 quantity

              return (
                <div
                  key={index}
                  className="flex items-center justify-between py-2"
                >
                  {/* LEFT SIDE: Image + Name */}
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 h-10 object-cover rounded-xl"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/${item.imageId}`}
                      alt={item.name}
                    />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>

                  {/* RIGHT SIDE: Quantity & Price */}
                  <div className="flex items-center justify-between gap-4">
                    {/* Quantity Control */}
                    <div className="flex items-center justify-center gap-2 bg-white rounded-lg px-2 py-1 shadow-sm">
                      <button
                        onClick={() => dispatch(removeItem(item))}
                        className="text-red-500 font-bold text-sm px-1 hover:scale-110 transition-transform"
                      >
                        −
                      </button>

                      <span className="text-sm font-medium text-gray-800">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(addItem(item))}
                        className="text-green-500 font-bold text-sm px-1 hover:scale-110 transition-transform"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-sm font-semibold text-gray-900 flex items-center">
                      ₹
                      {item.quantity *
                        ("defaultPrice" in item
                          ? item.defaultPrice / 100
                          : item.price / 100)}
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Charges */}
            <div className="flex justify-between">
              <span className="text-sm font-medium">Platform fee</span>
              <span>₹ 7</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium">GST (5%)</span>
              <span>₹ {((totalPrice * 5) / 100).toFixed(2)}</span>
            </div>
            <div className="border-t pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>₹ {(totalPrice + 7 + (totalPrice * 5) / 100).toFixed(2)}</span>
            </div>
          </div>

          {/* Confirm Button */}
          <div>
            <button
              onClick={handleConfirm}
              className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-medium transition-all"
            >
              Confirm Order
            </button>
            <ToastContainer position="top-center" autoClose={3000} />
          </div>
        </div>
      )}
    </div>
  );
}


// //  <div className="w-full h-full flex items-center justify-center bg-gray-100">
//       {!hasitemincart ? (
//       <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
//         <h1 className="text-3xl font-bold text-orange-500 mb-6"></h1>