import { GrocerGridCard } from "../utilis/grocerydata"
import Grocerycard from "./grocerycard"
export default function Grocery(){
    return(
        < div className="pt-10 mb-20 ">
        <h2 className="max-w-[80%] container mx-auto mt-18 font-serif font-black text-2xl">Shop Groceries on Instamart</h2>
       <div className="max-w-[80%] container mx-auto flex gap-8 mt-5  mb-5 overflow-x-auto pb-10">
  {
    GrocerGridCard.map((g) => (
        <div  key={g.id} className="flex-shrink-0">
      <Grocerycard  g={g} />
      </div>
    ))
  }
</div>
        </div>
    )
}