import {react,useState} from "react"

export default function Footer()
{
  const [click,setclick]=useState(false);
  // console.log(click);
  // Showing the all city part function
  if(click)
  {
     return(
        <>
        <img className="max-w-full conatiner mx-auto pt-15" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" ></img>
       <div>
        <h2 className="max-width-70% container mx-auto mt-20 mr-20 font-bold text-2xl">Cities with food delivery</h2>
        
    <div className="grid grid-cols-3 gap-1 max-w-[70%] container mx-auto">
{/* Rest all cities data */}
<div className="mt-8  bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
    <a href="https://www.swiggy.com/city/bangalore">Order food online in Bangalore</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
  <a href="https://www.swiggy.com/city/pune">Order food online in pune</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/mumbai">Order food online in mumbai</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
      <a href="https://www.swiggy.com/city/jaipur">Order food online in jaipur</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
      <a href="https://www.swiggy.com/city/Indore">Order food online in Indore</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/patna">Order food online in Patna</a>
   </div>
     <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/Delhi">Order food online in Delhi</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
    <a href="https://www.swiggy.com/city/Hyderbad">Order food online in Hyderbad</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/Chennai">Order food online in Chennai</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/Kolkata">Order food online in Kolkata</a>
   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
   <a href="https://www.swiggy.com/city/surat">Order food online in surat</a>   </div>
   <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/Ahmedbad">Order food online in Ahmedbad</a>
   </div>
   <div className="mt-8 bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/Lucknow">Order food online in Lucknow</a>
   </div>
    <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/bhopal">Order food online in Bhopal</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/nagpur">Order food online in Nagpur</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/chandigarh">Order food online in Chandigarh</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/patna">Order food online in Patna</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/ranchi">Order food online in Ranchi</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
    <a href="https://www.swiggy.com/city/guwahati">Order food online in Guwahati</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/coimbatore">Order food online in Coimbatore</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
    <a href="https://www.swiggy.com/city/vijayawada">Order food online in Vijayawada</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
    <a href="https://www.swiggy.com/city/visakhapatnam">Order food online in Visakhapatnam</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/mysore">Order food online in Mysore</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
  <a href="https://www.swiggy.com/city/trivandrum">Order food online in Trivandrum</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/kochi">Order food online in Kochi</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/bhubaneswar">Order food online in Bhubaneswar</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/amritsar">Order food online in Amritsar</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
    <a href="https://www.swiggy.com/city/dehradun">Order food online in Dehradun</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/vadodara">Order food online in Vadodara</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/kanpur">Order food online in Kanpur</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/ghaziabad">Order food online in Ghaziabad</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/noida">Order food online in Noida</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/faridabad">Order food online in Faridabad</a>
   </div>
   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/gurgaon">Order food online in Gurgaon</a>
  </div> 
  <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3"onClick={(e)=>setclick(!click)}>
    <div className="flex gap-1">
      <p className="text-xl">Show Less</p>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48" width="30" height="38" aria-hidden="true">
  <path d="M6 22 L20 8 L34 22" fill="none" stroke="#ff7a18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20" y1="8" x2="20" y2="40" stroke="#ff7a18" strokeWidth="3" strokeLinecap="round"/>
 </svg>


    </div>
  </div>
</div>


      </div>
        </>
    )
  }
    return(
        <>
        <img className="max-w-full conatiner mx-auto pt-15" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png" ></img>
       <div>
        <h2 className="max-width-70% container mx-auto mt-20 mr-20 font-bold text-2xl">Cities with food delivery</h2>
    <div className="grid grid-cols-3 gap-1 max-w-[70%] container mx-auto">
<div className="mt-8  bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
    <a href="https://www.swiggy.com/city/bangalore">Order food online in Bangalore</a>
   </div>
 <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
   <a href="https://www.swiggy.com/city/pune">Order food online in pune</a>
   </div>
  <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
    <a href="https://www.swiggy.com/city/mumbai">Order food online in mumbai</a>
  </div>
  <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
  <a href="https://www.swiggy.com/city/jaipur">Order food online in jaipur</a>
  </div>
  <div className="mt-8  bg-white  text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3">
     <a href="https://www.swiggy.com/city/Indore">Order food online in Indore</a>
  </div>

   <div className="mt-8 bg-white text-orange-500 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3" onClick={(e)=>{setclick(!click)}}>
    <div className="flex gap-1">
      <p className="text-xl">Show More</p>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 48" width="30" height="38" aria-hidden="true">
  <path d="M6 26 L20 40 L34 26" fill="none" stroke="#ff7a18" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="20" y1="8" x2="20" y2="40" stroke="#ff7a18" strokeWidth="3" strokeLinecap="round"/>
</svg>


    </div>
  </div>
</div>


       </div>
        </>
    )
}
// optimize this code as it is taking to much line and also redabality is Zero
// className="mt-8  bg-white text-orange-300 h-20 w-60 border-1 rounded-2xl flex items-center justify-center text-center p-3"
