import Card from "./Card";
import { resList } from "../utils/data";
import { useEffect, useState } from "react";

const Body = ()=> {
    const [listOfRestaurent, setListOfRestaurent] = useState(resList);

    useEffect(()=>{
        fetchData()
    }, []);

    const fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667");

        const json = await data.json();
        console.log("API: ->", json);
        setListOfRestaurent(json.data.cards[3]?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="body">
            <div className="menu">
                <h2 className="title">Restaurant Details</h2>
                <button 
                    className="filter all"
                    onClick={
                        ()=>{
                            setListOfRestaurent(resList);
                        }
                    }
                >All</button>
                <button 
                    className="filter"
                    onClick={
                        ()=>{
                            console.log("working...");
                            const filteredList = listOfRestaurent.filter(
                                (res)=>res.info.avgRating > 4.4
                            )
                            setListOfRestaurent(filteredList);
                        }
                    }>Top Restaurents
                </button>
            </div>
            <div className="res-container">
                    {/* Reataurent Cards */}
                    {/* <Card 
                        restro = {resList[0]}
                    /> */}

{/* using array map method */}
                {
                    listOfRestaurent.map((restaurent, index)=>(
                        <Card key={restaurent.info.id} restro={restaurent}/>
                    ))
                }
                
            </div>
        </div>
    );
}

export default Body;