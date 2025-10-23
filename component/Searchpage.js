import RestHeader from "./RestHeader";
import { useState } from "react";
import { useLocation ,useParams} from "react-router";
import RestHeader from "./RestHeader"
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart, addItems } from "../Stored/Slicer";
export default function Searchpage() {
 let {id} = useParams();
    const location = useLocation();
  const { dataset, text} = location.state || {};
  const filteredItems =
  dataset
          ?.flatMap((menuItems) => {
            if (menuItems?.card?.card?.itemCards) {
              return menuItems.card.card.itemCards;
            }
            if (menuItems?.categories) {
              return menuItems.categories.flatMap(
                (cat) => cat?.itemCards || []
              );
            }
            return [];
          })
          ?.filter((item) =>
            item?.card?.info?.name
              ?.toLowerCase()
              .includes(text.toLowerCase())
          ) || []
      
            const cartItems = useSelector((state) => state.cart.items);
            const dispatch=useDispatch();

            // console.log(filteredItems);
  return (
    <>
    {/* to avoid hum ko eek hi page mein header chahiye tha but wo return ke andar tha iselye dono page mein ja raha tha to avoid this we use it */}
    {location.pathname === `/city/mumbai/${id}/search` && <RestHeader></RestHeader>}
     {/* this { searchQuery ? ( the solution for no matching jo restaurant mein bhi tha */}
      { text ? (
      filteredItems.length > 0 ? (
        filteredItems.map((item, idx) => {
          const restData = item?.card?.info;
           const itemInCart=cartItems.find((item)=>item.id===restData.id)
               const count=itemInCart ? itemInCart.quantity:0;
        return (
  <div
    key={restData?.id || idx}
    className="flex w-[70%]  container mx-auto justify-between mb-6 pb-6 mt-6  border-b border-gray-200 hover:shadow-lg hover:rounded-3xl hover:bg-gray-50 transition-all duration-300 ease-in-out p-4"
  >
    {/* Left Section */}
    <div className="w-[70%] pr-4">
      {/* Veg / Non-Veg Icon */}
      {restData?.isVeg === 1 ? (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-2"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            stroke="green"
            fill="none"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="5" fill="green" />
        </svg>
      ) : (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-2"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            stroke="red"
            fill="none"
            strokeWidth="2"
          />
          <circle cx="12" cy="12" r="5" fill="red" />
        </svg>
      )}

      {/* Name */}
      <p className="text-xl font-semibold text-gray-800 mb-1">
        {restData?.name}
      </p>

      {/* Price */}
      <p className="text-lg font-medium text-gray-600 mb-2">
        {"₹" +
          ("defaultPrice" in restData
            ? restData?.defaultPrice / 100
            : restData?.price / 100)}
      </p>

      {/* Rating */}
      <div className="flex items-center mt-1">
        <div className="w-6 h-6 rounded-full bg-green-500 flex justify-center items-center shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-4 h-4 text-white"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.784.57-1.838-.197-1.539-1.118l1.285-3.945a1 1 0 00-.364-1.118L2.075 9.372c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.945z" />
          </svg>
        </div>
        <span className="text-green-700 ml-2 font-semibold">
          {restData?.ratings?.aggregatedRating?.rating}
        </span>
        <span className="text-gray-500 ml-1 text-sm">
          {"(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"}
        </span>
      </div>
    </div>

    {/* Right Section */}
    <div className="w-[25%] relative flex flex-col items-center">
      <img
        className="w-full h-40 object-cover rounded-3xl shadow-md hover:scale-105 transition-transform duration-300"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          restData?.imageId
        }
        alt={restData?.name}
      />
       {
            (count==0)?(<button className="absolute bottom-9 left-1/2 -translate-x-1/2 items-center rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white" onClick={()=>dispatch(addItem(restData))}>ADD</button>)
             :(<div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex gap-2  rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white">
                <button onClick={()=>(dispatch(removeItem(restData)))}>-</button>
                
                <span>{count}</span>
                <button onClick={()=>dispatch(addItem(restData))}>+</button>
              </div>
          )}
    </div>
  </div>

);

        })
      ) : (
          <p className="text-center text-gray-500">
          No matching items found
        </p>
      )) : null}
      <hr className="mb-6 mt-2" />
    </>
  );
}

