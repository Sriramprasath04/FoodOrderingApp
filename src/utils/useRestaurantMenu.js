import {useEffect, useState} from 'react'
import { RES_MENU_PATH } from './constants';

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(
        ()=>{
            fetchData();
        }, []
    );

    const fetchData = async ()=> {
        const data = await fetch(RES_MENU_PATH + resId);
        const json = await data.json();
        const restaurentMenu = json?.data?.cards[2]?.card?.card?.info;
        setResInfo(restaurentMenu);
    }

    return resInfo;
}

export default useRestaurantMenu;