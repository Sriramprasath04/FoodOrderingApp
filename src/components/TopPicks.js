import useTopPicks from "../utils/useTopPicks";
import ShimmerUI from "./ShimmerUI";

const TopPicks = ({resId}) =>{
    const {topPick} = useTopPicks(resId);
    console.log("=>",topPick);
    
    if(topPick === null ){
        return <ShimmerUI/>
    } 
    
    return (
        <div className="tp-container">
            {
                topPick.map(
                    (items, indx)=> (
                        <div className="tp-cont" key={indx}>
                            <img src={items?.card?.info?.imageId}/>
                            <button>ADD</button>
                        </div>
                    )
                )
            }
        </div>
    );
}

export default TopPicks;