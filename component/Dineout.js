import { Dineoutdata } from "../utilis/Dineoutdata";
import Dineoutcard from "./Dineoutcard";

export default function Dineout() {
  return (
    <div>
      <p className="font-bold text-2xl font-serif container mx-auto max-w-[80%]">
        Discover best restaurants on Dineout
      </p>

      <div className="container mx-auto flex gap-6 mt-6 pt-5 max-w-[80%] overflow-x-auto pb-10">
        {Dineoutdata.map((d) =>
          d?.dineoutRestaurants?.restaurants?.map((res) => (
            <Dineoutcard key={res?.info?.id} res={res} />
          ))
        )}
      </div>
    </div>
  );
}
