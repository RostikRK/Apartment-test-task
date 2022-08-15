import React, {useState} from "react";
import BlackButton from "./UI/button/BlackButton";
import BasicInput from "./UI/input/BasicInput";
import ApartmentService from "../API/ApartmentService";



const ApartmentForm = ({setModal, fetcher}) => {
    const [apartment, setApartment] = useState({
        rooms: "",
        name: "",
        price: "",
        description: "",
    })


    const addNewPost = (e) => {
        e.preventDefault() //prevent the autosubmition of form
        ApartmentService.addNewApartment(apartment, fetcher)
        setModal(false) //closes modal
        setApartment({
            rooms: "",
            name: "",
            price: "",
            description: "",
        }) //clears form
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
            <BlackButton onClick={addNewPost}>Create post</BlackButton>
        </form>
    );
};

export default ApartmentForm;