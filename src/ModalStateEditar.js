import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { FaEdit, FaCheck } from "react-icons/fa";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Table,
	FormGroup,
	Input,
	Label,
} from "reactstrap";

export const ModalStateEditar = () => {
	//Estado del Modal
	const [modal, setModal] = useState(false);
	const [edit, setEdit] = useState(false);

	//Funcion para alterar el estado del Modal
	const toggleModal = () => {
		setModal(!modal);
	};

	//Funcion para alterar el estado del boton Editar
	const toggleEdit = () => {
		setEdit(!edit);
	};

	//Estilo para centrar la caja del Modal
	const modalStyles = {
		transform: "translate(0,75%)",
	};

	const scrollTable = {
		overflowY: "scroll",
		height: "200px",
	};

	return (
		<>
			<p className="btn-modal enlace" onClick={toggleModal}>
				Editar
			</p>

			<Modal isOpen={modal} style={modalStyles}>
				<ModalHeader>Editar Empresa</ModalHeader>
				<ModalBody style={scrollTable}>
					<Table>
						<thead>
							<tr>
								<th>R.U.C.</th>
								<th className="justify-content-center">Empresa</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>111111</td>
								{!edit ? (
									<>
										<td>"Prueba"</td>
										<td>
											<FaEdit onClick={toggleEdit} />
										</td>
									</>
								) : (
									<>
										<td>
											<Input />
										</td>
										<td>
											<FaCheck onClick={toggleEdit} />
										</td>
									</>
								)}
							</tr>
						</tbody>
					</Table>
				</ModalBody>
				<ModalFooter>
					<Button color="secondary" onClick={toggleModal}>
						Cerrar
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};
