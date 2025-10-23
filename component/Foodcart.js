export default function Foodcard({food}){
    return (
        <div>
            <a href={food?.action?.link}>
            <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+food?.imageId}></img>
            </a>
        </div>


    )

}