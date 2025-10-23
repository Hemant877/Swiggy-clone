export default function Grocerycard({g}){
    return(
        <div className="w-40">
        <a href={g?.action?.link}>
        <img className="w-40 h-50 object-cover" src={ "https://media-assets.swiggy.com/swiggy/image/upload/"+g?.imageId }></img>
         <h3 className="font-bold text-xl text-center  text-gray-600">{g?.action?.text}</h3>
        </a>
        </div>
    )

}