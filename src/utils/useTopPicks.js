import { useEffect, useState } from "react"
import { RES_MENU_PATH } from "./constants";

const useTopPicks = (resId) =>{
    const[topPicks, setTopPicks] = useState(null);

    useEffect(
        ()=>{
            fetchData();
        }, []
    );

    const fetchData = async () =>{
        const data = await fetch(RES_MENU_PATH + resId);
        const json = await data.json();
        setTopPicks(json?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    }
    return topPicks;
}

export default useTopPicks;