import CardUI from "./CardUI";

const ShimmerUI = ()=>{
    return (
        <>
            <div className="body-ui">
                <div className="title-container">
                    <div className="title-ui"></div>
                    {/* <div className="filters-optn">
                        <div className="filter-ui"></div>
                        <div className="filter-ui"></div>
                        <div className="filter-ui"></div>
                    </div> */}
                </div>
                <div className="res-title-cont">
                    <div className="res-title"></div>
                </div>
                <div className="res-container-ui">
                    {
                        (()=>{
                            const cards = [];
                            for (let index = 0; index < 10; index++) {
                                cards.push(<CardUI key={index}/>)
                            }
                            return cards;
                        })()
                    }
                </div>
            </div>
        </>
    );
}

export default ShimmerUI;