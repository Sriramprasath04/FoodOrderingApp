import Card from "./Card";
import { resList } from "../utils/data";
import { useState } from "react";

const Body = ()=> {
    const [listOfRestaurent, setListOfRestaurent] = useState(resList);


    return (
        <div className="body">
            <div className="menu">
                <h2 className="title">Restaurant Details</h2>
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