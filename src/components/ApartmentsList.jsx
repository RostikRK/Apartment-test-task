import React from "react";
import ApartmentCard from "./ApartmentCard";



const ApartmentsList = ({apartments, fetcher}) => {
    return (
        <div className="categories-grid">
            {apartments.map(apartment => 
            <ApartmentCard apartment={apartment} fetcher={fetcher}/>
            )}
        </div>
    );
};

export default ApartmentsList;