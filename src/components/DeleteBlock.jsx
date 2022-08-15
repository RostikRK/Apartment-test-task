import React from "react";
import BlackButton from "./UI/button/BlackButton";
import ApartmentService from "../API/ApartmentService";

const DeleteBlock = ({setModal, fetcher, id}) => {
    const deletePost = (e) => {
        ApartmentService.deleteApartment(id, fetcher)
        setModal(false) // close modal
    }

    return (
        <div>
            <h5>Are you sure you want to delete this apartment?</h5>
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: 20}}>
                <BlackButton onClick={deletePost}>Yes</BlackButton>
                <BlackButton onClick={() => setModal(false)}>No</BlackButton>
            </div>
        </div>
    )
}

export default DeleteBlock;