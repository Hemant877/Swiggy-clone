import Restinfo from "./Restinfo"
import { useState,useEffect } from "react"
export default function Fooddetails({menuItems,foodselected}){
    const [isopen,setopen]=useState((true));

    if("categories" in menuItems)
    {
        return(
           <div className="w-full">
            <p className="text-xl font-bold mb-4 container mx-auto">{menuItems?.title}</p>
            <div>
                {
                    menuItems?.categories?.map((items)=> <Fooddetails key={items?.title} menuItems={items}></Fooddetails>)
                }
            </div>
            </div>
        )
    }
    if(!isopen)
    {
        return(
            <>
            <div className="max-w-[80%] container mx-auto">
                <div className="flex justify-between w-full">
                    <p className="text-xl font-bold mb-4">{menuItems?.title}</p>
                    {/* svg of down */}
                     <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth="2" onClick={()=>setopen(!isopen)}>
                    <path d="M4 10 L12 18 L20 10" />
                    </svg>
                </div>
                <div className="h-5 bg-gray-200 mt-2 mb-2 rounded-xl"></div>
            </div>
            </>
        )
    }
    if(foodselected==='veg')
    {
         return(
        <>
        <div className="max-w-[80%] container mx-auto items-center">
            <div className="flex justify-between w-full">
            <p className="text-xl font-bold mb-4">{menuItems?.title}</p>
            <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth="2" onClick={()=>setopen(!isopen)}>
            <path d="M4 14 L12 6 L20 14" />
            </svg>

            </div>
            {
                
            menuItems?.itemCards?.filter(items=> "isVeg" in items?.card?.info).map((items)=><Restinfo key={items?.card?.info?.id} restData = {items?.card?.info}></Restinfo>)
            }            
        </div>
        </>
    )
}
     if(foodselected==='nonveg')
    {
         return(
        <>
        <div className="max-w-[80%] container mx-auto items-center">
            <div className="flex justify-between w-full">
            <p className="text-xl font-bold mb-4">{menuItems?.title}</p>
            <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth="2" onClick={()=>setopen(!isopen)}>
            <path d="M4 14 L12 6 L20 14" />
            </svg>

            </div>
            {
                
            menuItems?.itemCards?.filter(items=> !("isVeg" in items?.card?.info)).map((items)=><Restinfo key={items?.card?.info?.id} restData = {items?.card?.info}></Restinfo>)
            }            
        </div>
        </>
    )
    }
    return(
        <>
        <div className="max-w-[80%] container mx-auto items-center">
            <div className="flex justify-between w-full">
            <p className="text-xl font-bold mb-4">{menuItems?.title}</p>
            <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="black" strokeWidth="2" onClick={()=>setopen(!isopen)}>
            <path d="M4 14 L12 6 L20 14" />
            </svg>

            </div>
            {
                
            menuItems?.itemCards?.map((items)=><Restinfo key={items?.card?.info?.id} restData = {items?.card?.info}></Restinfo>)
            }            
        </div>
        </>
    )
}