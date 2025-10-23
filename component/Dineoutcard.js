export default function Dineoutcard({ res }) {
  return (
    <div className="h-102 w-85 bg-white rounded-2xl">
    <a
      href={res?.info?.mediaFiles[0]?.url}
      className="block w-[327px]"
    >
      <div className="relative">
         <img
        className="w-[327px] h-[190px] object-cover rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/" +
          res?.info?.mediaFiles[0]?.url
        }
        
      />
        <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-black/70 to-transparent rounded-b-2xl"></div>
       <div className="absolute bottom-2 left-2 text-xl font-bold text-white z-10">
    <p>{res?.info?.name}</p>
  </div>
             <div className="absolute bottom-2 right-2 flex items-center space-x-1 text-white text-xl font-bold z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              className="w-5 h-5 text-green-400"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.945a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.286 3.945c.3.921-.755 1.688-1.54 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.784.57-1.838-.197-1.539-1.118l1.285-3.945a1 1 0 00-.364-1.118L2.075 9.372c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.945z" />
            </svg>
              <span>{res?.info?.rating?.value}</span>
            </div>
    </div>
    {/* next part of it like chinese cost */}
    <div className="flex justify-between mt-2 w-full font-semibold">
      <p className="text-gray-500 w-[210px] text-sm truncate">{res?.info?.cuisines.join(" • ")}</p>
      <p className="text-gray-500 w-[90px] text-sm">{res?.info?.costForTwo}</p>
    </div>
     <div className="flex justify-between mt-2 w-full font-semibold object-cover">
      <p className="text-gray-500 w-[250px] text-sm truncate">{res?.info?.locationInfo?.landmarkName},{res?.info?.locality},{res?.info?.locationInfo?.city?.name}</p>
      <p className="text-gray-500 w-[50px] text-sm">{res?.info?.locationInfo?.distanceString}</p>
    </div>
    <div className="flex justify-start mt-4 ml-2 w-[323px] font-semibold object-cover h-[25px] gap-2">
      {res?.info?.vendorOffer?.offerHighlights?.map((value,index)=>(
        <div key={index} className="flex items-center bg-gray-300 rounded-2xl gap-1 h-[21px] w-[115px] justify-evenly pt-2 pb-2.5 mr-1 pr-0.5 pl-1">
        <img className="h-3 w-3 mt-1 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+value?.logoCtx?.logo}></img>
        <p className="text-gray-500 text-sm w-[120px]">{value.logoCtx.text}</p>
        </div>
      ))}
    </div>
    {/* next section */}
    <div className="p-2 mt-3 bg-[#1BA672] rounded-2xl flex justify-between">
      <div className="flex gap-1 items-center">
        <img className="h-8 w-6 object-cover" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png"></img>
      <p className="font-bold text-sm text-white">{res?.info?.offerInfoV3?.vendorOffer?.title}{res?.info?.offerInfoV3?.vendorOffer?.subtitle}</p>
      </div>
      <div>
        <p className="font-bold text-sm text-white">{res?.info?.offerInfoV3?.vendorOffer?.subtext}</p>
      </div>
    </div>
    {/* next section */}
    <div className="p-2 mt-3 bg-[#a7edd2] rounded-2xl flex ">
      <p className="font text-md text-green-700">{res?.info?.customerOffer?.infos[0]?.description}</p>
    </div>
    </a>
    </div>
  );
}
