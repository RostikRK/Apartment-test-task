import React, {useState} from "react";
import noImage from "./images/no-image.png";
import DeleteButton from "./UI/button/DeleteButton";
import EditButton from "./UI/button/EditButton";
import AddingModal from "./UI/modal/AddingModal";
import PrefilledApartmentForm from "./PrefilledApartmentForm";
import DeleteBlock from "./DeleteBlock";


const ApartmentCard = (props) => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    return (
        <div className="card">
            <img className="card-img-top" src={noImage} alt=""/>
            <DeleteButton onClick={() => setDeleteModal(true)}/>
            <AddingModal visible={deleteModal} setVisible={setDeleteModal}>
                <DeleteBlock 
                    setModal={setDeleteModal} 
                    fetcher={props.fetcher} 
                    id={props.apartment._id} 
                />
            </AddingModal>
            <EditButton onClick={() => setEditModal(true)}/>
            <AddingModal visible={editModal} setVisible={setEditModal}>
                <PrefilledApartmentForm 
                    setModal={setEditModal} 
                    fetcher={props.fetcher} 
                    filler={props.apartment}
                />
            </AddingModal>
            <div className="card-body">
                <h5 className="card-title">{props.apartment.name}</h5>
                <p className="card-text">{props.apartment.description}</p>
                <div className="apartmentCardBottom">
                    <h6>Price: {props.apartment.price}</h6>
                    <h6>The number of rooms: {props.apartment.rooms}</h6>
                </div>
            </div>
        </div>
    );
};

export default ApartmentCard;