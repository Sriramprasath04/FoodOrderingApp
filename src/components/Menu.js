import { useEffect, useState } from "react";
import ShimmerUI from './ShimmerUI';

import star from '../img/icons8-star-100.png';
import { IMAGE_PATH } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu = () => {
    const {resId} = useParams();
    const resdata = useRestaurantMenu(resId); 
    console.log(resdata);
    if(resdata === null)  return  <ShimmerUI/>;
    
    // let topPick = resdata?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card?.carousel;
    const {name, costForTwoMessage, totalRatingsString, avgRatingString} = resdata;
    // const {itemCards} = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card;
    
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
            <h3 className="tit">Top Picks</h3>
            {/* <div className="top-picks">
                <div className="tp-container">
                    {
                        topPick.map(
                            (items, indx)=> (
                                <div className="tp-cont" key={indx}>
                                    <img src={IMAGE_PATH+items.creativeId}/>
                                    <button>ADD</button>
                                </div>
                            )
                        )
                    }
                </div>
            </div> */}
            {/* <h3 className="tit">{'Recomented'+' [ ' + itemCards.length+' ]'}</h3>
            <div className="item-list">
                {
                    itemCards.map(
                        (items)=>(
                            <div className="item">
                                <div className="top">
                                    <div className="menu-title">
                                        <span className={items?.card?.info?.isVeg === 1? 'veg' : 'nv'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="type">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                                            </svg>
                                        </span>
                                        <h3>{items?.card?.info?.name}</h3>
                                    </div>
                                    <div>
                                        <button className="item-btn">Add</button>
                                    </div>
                                </div>
                                <div className="price">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="priceImg">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <span>{items?.card?.info?.defaultPrice/100 || items?.card?.info?.price/100}</span>
                                </div>
                                <p className="light">{items?.card?.info?.description}</p>
                            </div>
                        )
                    )
                }
            </div> */}
        </div>
    );
}

export default Menu;