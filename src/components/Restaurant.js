import { CDN_URL }  from "./utils/constants"

const rating = {
    backgroundColor: "#48c479",
    width: "fit-content",
    color: "white"
}

const poorRating = {
    backgroundColor: "red",
    width: "fit-content",
    color: "white"
}

const RestaurantCard = (props) => {
    
    const { resData } = props;
    const {
        name, 
        cloudinaryImageId, 
        cuisines, 
        slugs, 
        area, 
        avgRating, 
        costForTwoString, 
        deliveryTime
    } = resData?.data;
    return (
        <div className="res-card">
             <img className="res-card-logo" src={ CDN_URL + cloudinaryImageId} alt={cloudinaryImageId} loading="lazy"></img>
            <h3>{name}</h3>
            <div>{cuisines[0]}</div>
            <div>{slugs.city}, {area}</div>
            <div className="info">
                <ul>                    
                    <li style={avgRating>3.9 ? rating : poorRating}>{avgRating} stars</li>
                    <li>{costForTwoString} </li>
                    <li>{deliveryTime} Minutes</li>
                </ul>
            </div>           
        </div>
    );
};

export default RestaurantCard;