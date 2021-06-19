import React, { useState } from "react";

export const Modal = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        
    }

	return (
		<>
			<button className="btn btn-primary" onClick={toggleModal}>
				Agregar
			</button>
		</>
	);
};
