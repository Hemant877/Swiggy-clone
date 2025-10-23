import { Link } from "react-router"
export default function Restcard({restInfo}){
     const res=restInfo?.info?.id;
    return (
        <>
        <Link to={`/city/mumbai/${restInfo?.info?.id}`}>
        <div className="transform transition  duration-300 hover:scale-95">
            {/* Adding gradient to image */}
        <div className="relative">
        <img className="w-55 h-[146px] object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+restInfo.info.cloudinaryImageId}></img>
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/100 to-transparent rounded-b-2xl"></div>
        <div className="flex flex-col items-center justify-start">
        <span className="absolute bottom-1 left-2 font-bold text-white text-xl">{restInfo?.info?.aggregatedDiscountInfoV3?.header}</span>
         <span className="absolute bottom-1 right-8 font-bold text-white  text-lg">{restInfo?.info?.aggregatedDiscountInfoV3?.subHeader}</span>
         </div>
        </div>
        {/* Image ke badh wala saree*/}
        <div className="mt-2">
            {/* name use food ka */}
        <div className="ml-1.5">
             <p className="font-bold text-[20px]">{restInfo?.info?.cuisines[0]}</p>
        </div>
        {/* svg image */}
        <div className="flex justify-start items-center gap-2">
            <div className="w-[18px] flex justify-center h-[18px] bg-green-700 rounded-full items-center ml-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="20"  viewBox="0 0 24 24" aria-hidden="true" role="img">
  <title>White star</title>
  <path fill="#ffffff" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
</svg>

            </div>
            {/* rating and deliveryTime*/}
            <div>
                <span>{restInfo?.info?.avgRating} • </span>
                <span className="font-bold">{restInfo?.info?.sla?.slaString}</span>
            </div>
        <div>

            </div>
        </div>
        {/*Food info*/}
        <div className="flex flex-col ml-1.5 flex-wrap overflow-hidden">
            <span  className="text-gray-400 truncate  w-48">{restInfo?.info?.cuisines.join(",")}</span>
            <span className="text-gray-400 truncate  w-48">{restInfo?.info?.areaName}</span>
        </div>
        </div>
        </div>
        </Link>
        </>
    )
}