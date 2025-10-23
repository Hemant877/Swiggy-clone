import { Link } from "react-router"
export default function Header(){
    return(
        <header className="bg-[#ff5200] font-serif">
            {/* This is for image Top Header and button like swiggy corporate  */}
            <div className=" flex justify-between container mx-auto py-8">
                 <img className="w-40 h-12" src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
                <div className=" text-white text-base font-bold flex gap-8 items-center">
                <a target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
                <a target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with Us</a>
                <a className="border border-white py-3 px-4 rounded-2xl" target="_blank" href="https://www.swiggy.com/corporate/">Get The App</a>
                <a className="border border-black bg-black py-3 px-4 rounded-2xl"target="_blank" href="https://www.swiggy.com/corporate/">Sign in</a>
                </div>
            </div>
            {/* For center means veggies and content*/}
            <div className="pt-10 pb-6 relative">
                <img className="h-[450px] w-[250px] absolute top-0 left-0"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"></img>
                <img className="h-[450px] w-[250px] absolute top-0 right-0"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"></img>
            </div>
            <div className=" max-w-[65%] container mx-auto font-bold text-5xl text-[#fff] text-center">
                 Order Food and groceries. Discover best restaurants. Swiggy it!
            </div>
            <div className="flex max-w-[70%] container mx-auto gap-5 mt-7">
                <input className="bg-white py-4 px-6 ml-8 w-[40%] rounded-2xl text-black text-xl border border-gray-600 " type="text" id="location" placeholder="Enter your Delivery Location"></input>
                <input className="bg-white py-4 px-6 w-[50%] rounded-2xl  text-black text-xl border border-gray-600" type="text" id="location" placeholder="Search for restaurant, item or more"></input>
            </div>

            <div className="flex container mx-auto pt-6 max-width-[80%]">
                <Link to="/restaurant">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"></img>
                </Link>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"></img>
                </a>
                <a href="https://www.swiggy.com/dineout">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"></img>
                </a>
            </div>
        </header>

    )
}