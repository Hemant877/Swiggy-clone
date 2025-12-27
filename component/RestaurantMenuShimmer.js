import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import Fooddetails from "./Fooddetails";
import RestHeader from "./RestHeader";
import Searchpage from "./Searchpage";
import Shimmer from "./Shimmer"; // import the shimmer

export default function RestaurantMenuShimmer() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [RestData, setRestData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
        const response = await fetch(`/.netlify/functions/menu?id=${id}`);
      const data = await response.json();
      const tempData =
        data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterdata = tempData.filter((items) => "title" in items?.card?.card);
      setRestData(filterdata);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  const usefulldata = RestData.map((menuItems) => menuItems?.card?.card);

  const handleSearch = () => {
    navigate(`search`, { state: { dataset: usefulldata, text: searchText } });
  };

  return (
    <>
      <RestHeader />
      <div className="w-[90%] mx-auto mt-4 relative">
        {/* Search */}
        <div className="w-full relative">
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
            />
          </svg>

          <input
            className="w-full py-3 pl-12 pr-20 text-lg text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for Dishes..."
          />
          <button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
          >
            Search
          </button>
        </div>

        {/* Pass the value to Searchpage */}
        <Searchpage data={searchText} dataset={usefulldata} />
      </div>

      {/* Filter buttons */}
      <div className="w-[80%] mx-auto mt-20 mb-10 flex gap-4">
        <button
          className={`text-xl py-2 px-4 border-none rounded-2xl ${
            selected === "veg" ? "bg-green-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>
        <button
          className={`text-xl py-2 px-4 border-none rounded-2xl ${
            selected === "nonveg" ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
        >
          Non veg
        </button>
      </div>

      {/* Shimmer while loading */}
      {loading ? (
        <Shimmer />
      ) : (
        RestData.map((menuItems, index) => (
          <div key={menuItems?.card?.card?.title || index}>
            <Fooddetails
              menuItems={menuItems?.card?.card}
              foodselected={selected}
            />
          </div>
        ))
      )}
    </>
  );
}

  // const proxyServer = "https://cors-anywhere.herokuapp.com/";
      // const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      // const response = await fetch(proxyServer + swiggyAPI);
