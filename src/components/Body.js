import RestaurantCard from "./Restaurant";
import objResp  from "./utils/mockData"
import { useState } from 'react';

const Body = ()=> {
    const [ listOfRestaurants, setListOfRestaurants ] =  useState(objResp);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.data.data.avgRating > 4
                    )
                    setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div> 
            <div className="res-container">
                {listOfRestaurants.map((rest) => (
                <RestaurantCard key={rest.data.id} resData={rest.data} />
                ))}
            </div>          
        </div>
    );
};


export default Body;