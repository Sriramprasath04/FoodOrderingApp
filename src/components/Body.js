import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import About from "./About";

const Body = ()=> {
    const [listOfRestaurent, setListOfRestaurent] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        console.log("API: ->", json);
        setListOfRestaurent(json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    

    return (listOfRestaurent.length === 0 )? 
    (
        <ShimmerUI/>
    ) : (
        <div className="body">
            <About/>
            <div className="search-container">
                <div className="search">
                    <input type="text" className="search-box"/>
                    <button className="search-button" onClick={()=>{
                        
                    }}>Search</button>
                </div>
                <div className="filters">
                    <button 
                        className="filter all"
                        onClick={
                            ()=>{
                                fetchData();
                            }
                        }
                    >All</button>
                    <button 
                        className="filter"
                        onClick={
                            ()=>{
                                console.log("working...");
                                const filteredList = listOfRestaurent.filter(
                                    (res)=>res.info.avgRating > 4
                                )
                                setListOfRestaurent(filteredList);
                            }
                        }>Top Restaurents
                    </button>
                    <button className="filter"
                        onClick={
                            ()=>{
                                const filteredList = listOfRestaurent.filter(
                                    (res)=>res.info.veg == true
                                )
                                setListOfRestaurent(filteredList);
                            }
                        }
                    >Veg
                    </button>
                </div>
            </div>
            <div className="menu">
                <h2 className="title">Restaurant Details</h2>
            </div>
            <div className="container">
                <div className="res-container">
                    {
                        listOfRestaurent.map((restaurent, index)=>(
                            <Card key={restaurent.info.id} restro={restaurent}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Body;