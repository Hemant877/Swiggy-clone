import { useEffect,useState } from "react";
import Restcard from "./Restcard";
import Shimmer from "./Shimmer";
import RestHeader from "./RestHeader";
export default function Restaurant(){
      const [RestData, setRestData] = useState([])

       useEffect(()=>{
         async function fetchData() {
            // const proxy = "https://cors-anywhere.herokuapp.com/";
            // const swiggyAPI = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.076090&lng=72.877426&is-seo-homepage-enabled=true`;
            //  const response= await fetch(proxy+swiggyAPI)
            //  const data= await response.json()
            const response = await fetch("/.netlify/functions/swiggy");
            const data = await response.json();
            setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
       },[])
        // console.log(JSON.stringify(RestData, null, 2));
        if(RestData.length === 0)
        {
            return(<Shimmer></Shimmer>)
        }
        // console.log(RestData?.card?.card);
        return (
            <>
            {/* Hum actually mein resturant wale se header mein kuch nhi send kar rahe hai jo usefull ho humko  */}
            <RestHeader></RestHeader>
            {/* foodoption wale card  */}
        <div className="flex flex-wrap w-[90%] mx-auto mt-20 container gap-8">
            {
                RestData.map((restInfo)=><Restcard key={restInfo?.info?.id} restInfo={restInfo}></Restcard>)
            }

        </div>
        </>
    )
    
}

