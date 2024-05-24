import Card from "./Card";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=> {
    const onlineStatus = useOnlineStatus();
    const [listOfRestaurent, setListOfRestaurent] = useState(null);
    const [searchInput, setSearchInput] = useState("");
    const [api, setApi] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);


    const fetchData = async ()=> {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();
        const filter = json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log("Filter Data =>"+json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setApi(filter);
        setListOfRestaurent(filter);
    };

    if(!onlineStatus){
        return <h1>You're Offline!! Check your internet connection!</h1>
    }    

    return (listOfRestaurent === null)? 
    (
        <ShimmerUI/>
    ) : (
        <div className="body">
            <div className="search-container">
                <div className="search">
                    <input type="text" className="search-box" value={searchInput} onChange={(e)=>{
                        setSearchInput(e.target.value);
                    }}/>
                    <button className="search-button" onClick={()=>{
                        const filteredRestaurent = api.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchInput.toLowerCase())
                        );
                        console.log(filteredRestaurent);
                        setListOfRestaurent(filteredRestaurent);
                    }}>Search</button>
                </div>
                <div className="filters">
                    <button className="filter all"
                        onClick={
                            ()=>{
                                setListOfRestaurent(api);
                            }
                        }
                    >All</button>
                    <button className="filter"
                        onClick={
                            ()=>{
                                const filteredList = api.filter(
                                    (res)=>res.info.avgRating > 4
                                )
                                setListOfRestaurent(filteredList);
                            }
                        }>Top Restaurents
                    </button>
                    <button className="filter"
                        onClick={
                            ()=>{
                                const filteredList = api.filter(
                                    (res)=>res.info.veg == true
                                )

                                if(filteredList.length === 0){
                                    setListOfRestaurent([]);
                                    return;
                                } 

                                setListOfRestaurent(filteredList);
                            }
                        }
                    >Veg
                    </button>
                </div>
            </div>
            <div className="container">
                <div className="res-container">
                    {
                        listOfRestaurent.map((restaurent, index)=>(
                            <Link key={restaurent.info.id} to={"/restaurants/"+ restaurent.info.id}><Card  restro={restaurent}/></Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Body;