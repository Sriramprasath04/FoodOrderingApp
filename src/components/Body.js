import Card from "./Card";
import { resList } from "../utils/data";

const Body = ()=> {
    return (
        <div className="body">
            <h2 className="title">Restaurant Details</h2>
            <div className="res-container">
                    {/* Reataurent Cards */}
                    {/* <Card 
                        restro = {resList[0]}
                    /> */}

{/* using array map method */}
                {
                    resList.map((restaurent, index)=>(
                        <Card key={restaurent.info.id} restro={restaurent}/>
                    ))
                }
                
            </div>
        </div>
    );
}

export default Body;