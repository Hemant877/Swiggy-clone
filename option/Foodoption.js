import { imageGridCards } from "../utilis/Foodcartdata";
import Foodcard from "../component/Foodcart"

export default function Foodoption(){
    return (
      <>
   <div className="max-w-[80%] mx-auto mt-30">
  {/* Heading */}
  <h2 className="mb-6 font-serif font-black text-3xl">
    Order our best food options
  </h2>

  {/* Horizontal Scroll */}
  <div className="flex gap-8 mt-5 mb-5 overflow-x-auto pb-15">
    {imageGridCards.map((food) => (
      <div key={food.id} className="flex-shrink-0">
        <Foodcard food={food} />
      </div>
    ))}
  </div>
</div>

    </>
  );
}