import React, {useState} from "react";
import BlackButton from "./UI/button/BlackButton";
import logo from './images/logo.jpg'
import AddingModal from "./UI/modal/AddingModal";
import ApartmentForm from "./ApartmentForm";

function Header({fetcher}) {
    const [addModal, setAddModal] = useState(false)
    
    return (
        <div className="Header">
            <div className="left-section">
                <img className="estate-logo" src={logo} />
                <h1>Apartment marketplace</h1>
            </div>
            <div className="right-section">
                <BlackButton onClick={() => setAddModal(true)}>
                    Add apartments
                </BlackButton>
                <AddingModal visible={addModal} setVisible={setAddModal}>
                    <ApartmentForm setModal={setAddModal} fetcher={fetcher}/>
                </AddingModal>
            </div>
        </div>
    );
}

export default Header;