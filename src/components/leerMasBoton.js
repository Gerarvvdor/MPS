import React from "react";
import { useState } from "react";
import Modal from "./modal";

function LeerMasBoton() {
    const [openModal, setOpenModal] = useState(false);
    return(
    <div>
        <button className="onpenModalBtn" onClick={() => {setOpenModal(true);}}>Leer mas</button>
        {openModal && <Modal closeModal={setOpenModal}/>}
    </div>
    );
}
export default LeerMasBoton;