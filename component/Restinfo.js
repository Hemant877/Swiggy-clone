import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, clearCart, addItems } from "../Stored/Slicer";


export default function Restinfo({restData}){
// this line means ki hum konse item ko count kar rahe hai that's why id is v.imp to get detail of the item 
   const itemInCart = useSelector((state) =>
    state.cart.items.find((item) => item.id === restData.id)
  );

  const count = itemInCart ? itemInCart.quantity : 0;
  const dispatch=useDispatch();
    return (
         <>
        <div className="flex w-full justify-between mb-2 pb-2">
          <div className="w-[70%]">
            {restData.isVeg===1?(
                                    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" y="2" width="20" height="20" stroke="green" fill="none" strokeWidth="2"/>
  <circle cx="12" cy="12" r="5" fill="green"/>
  </svg>
            ):(
                <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2" width="20" height="20" stroke="red" fill="none" strokeWidth="2"/>
          <circle cx="12" cy="12" r="5" fill="red"/>
        </svg>
            )
            }
            <p className="text-xl text-gray-700 font-semibold mb-1">{restData?.name}</p>
            <p className="text-xl">{"₹"+ ("defaultPrice" in restData ? restData?.defaultPrice/100:restData?.price/100)}</p>
            <div className="flex flex-row">
              <div className="w-6 h-6 rounded-full bg-green-400 flex justify-center items-center">
              <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-4 h-4 text-white"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.784.57-1.838-.197-1.539-1.118l1.285-3.945a1 1 0 00-.364-1.118L2.075 9.372c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.945z" />
            </svg>
            </div>
             <span className="text-green-700 ml-1">{restData?.ratings?.aggregatedRating?.rating}</span>
              <span>{"("+restData?.ratings?.aggregatedRating?.ratingCountV2+")"}</span>
            </div>
            <p>
                {restData?.description}
            </p>    
          </div>
          <div className="w-[20%] relative">
            <img className="w-full h-36 object-cover rounded-3xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restData?.imageId}></img>
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
        <hr className="mb-6 mt-2"></hr>
        </>

    )
}