import React from "react";
import ApartmentCard from "./ApartmentCard";



const ApartmentsList = ({apartments, fetcher}) => {
    return (
        <div className="categories-grid">
            {/* Iterate through the all apartments and create their cards*/}
            {apartments.map(apartment => 
            <ApartmentCard apartment={apartment} fetcher={fetcher}/>
            )}
        </div>
    );
};

export default ApartmentsList;