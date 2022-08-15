import React, {useState} from "react";
import BlackButton from "./UI/button/BlackButton";
import BasicInput from "./UI/input/BasicInput";
import ApartmentService from "../API/ApartmentService";



const PrefilledApartmentForm = ({setModal, fetcher, filler}) => {
    const [apartment, setApartment] = useState({
        rooms: filler.rooms,
        name: filler.name,
        price: filler.price,
        description: filler.description,
    })

    const updatePost = (e) => {
        e.preventDefault()
        ApartmentService.updateApartment(apartment, fetcher, filler._id)
        setModal(false)
    }
    
    return (
        <form>
            {/* controlled component */}
            <BasicInput
                value={apartment.name}
                onChange={e => setApartment({...apartment, name: e.target.value})}
                type="text"
                placeholder="Apartment name"
            />
            <BasicInput
                value={apartment.description}
                onChange={e => setApartment({...apartment, description: e.target.value})}
                type="text"
                placeholder="Apartment Description"
            />
            <BasicInput
                value={apartment.rooms}
                onChange={e => setApartment({...apartment, rooms: e.target.value})}
                type="number"
                min="1"
                placeholder="Number of rooms"
            />
            <BasicInput
                value={apartment.price}
                onChange={e => setApartment({...apartment, price: e.target.value})}
                type="number"
                min="1"
                placeholder="Price"
            />
            <BlackButton onClick={updatePost}>Save changes</BlackButton>
        </form>
    );
};

export default PrefilledApartmentForm;