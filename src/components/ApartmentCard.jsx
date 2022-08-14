import React, {useState} from "react";
import noImage from "./images/no-image.png";
import DeleteButton from "./UI/button/DeleteButton";
import EditButton from "./UI/button/EditButton";
import AddingModal from "./UI/modal/AddingModal";
import ApartmentForm from "./ApartmentForm";


const ApartmentCard = (props) => {
    const [deleteModal, setDeleteModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    return (
        <div className="card">
            <img className="card-img-top" src={noImage} alt="Card image cap"/>
            <DeleteButton onClick={() => setDeleteModal(true)}/>
            <AddingModal visible={deleteModal} setVisible={setDeleteModal}>
                <ApartmentForm setModal={setDeleteModal} fetcher={props.fetcher}/>
            </AddingModal>
            <EditButton onClick={() => setEditModal(true)}/>
            <AddingModal visible={editModal} setVisible={setEditModal}>
                <ApartmentForm setModal={setEditModal} fetcher={props.fetcher}/>
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