import { IMAGE_PATH } from "../utils/constants";
import star from "../img/icons8-star-100.png"

const Card = (props)=> {
    const {restro} = props
    // name, availability, avgRating, cuisines, areaName
    const {name, cloudinaryImageId, costForTwo, avgRating, cuisines, areaName} = restro.info
console.log(restro.info);

    return (
        <div className="res-card">
            <div className="img-container">
                <img className="resimg" alt="resimg" src={IMAGE_PATH + cloudinaryImageId}/>
                <h2 className="co2">{costForTwo}</h2>
            </div>
            <div className="content">
                <div className="details">
                    <h3 className="res-name">{name}</h3>
                    <div className="rating">
                        <img className="star" src={star}/>
                        <p>{avgRating}</p>
                    </div>
                    <p className="cusine">{cuisines.join(", ")}</p>
                    <p className="areaName">{areaName}</p>
                </div>
            </div>
         </div>
    )
}

export default Card;