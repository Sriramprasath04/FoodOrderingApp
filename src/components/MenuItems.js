import ShimmerUI from './ShimmerUI';

import star from '../img/icons8-star-100.png';
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const MenuItems = () => {
    const {resId} = useParams();
    const resdata = useRestaurantMenu(resId); 
    console.log(resdata);
    if(resdata === null)  return  <ShimmerUI/>;
    const {name, costForTwoMessage, totalRatingsString, avgRatingString} = resdata;
    
    return (
        <div className="menu-lis f">
            <div className="detail">
                <h1 className="">{name}</h1>
                <div className="ratings">
                    <img src={star} className="star"/>
                    <p>{avgRatingString}</p>
                    <p>{'('+totalRatingsString+')'}</p>
                </div>
                <p className="">{costForTwoMessage}</p>
            </div>
        </div>
    );
}

export default MenuItems;