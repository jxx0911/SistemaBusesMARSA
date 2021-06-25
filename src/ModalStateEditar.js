import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Modal.css";
import axios from "axios";
import {
	Button,
	FormGroup,
	Label,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Input,
} from "reactstrap";

export const ModalStateEditar = ({ _ruc }) => {
	//Estado del Modal
	const [modal, setModal] = useState(false);
	const [editEmpresa, setEditEmpresa] = useState({
		ruc: "",
		nombre_empresa: "",
	});

	//Funcion para alterar el estado del Modal
	const toggleModal = () => {
		setModal(!modal);
	};

	const { register, handleSubmit } = useForm();

	const handleChange = (e) => {
		setEditEmpresa({
			...editEmpresa,
			[e.target.value]: e.target.value,
		});
	};

	const onSubmit = (editEmpresa, e) => {
		e.preventDefault();
		console.log(editEmpresa);
		axios
			.post(
				"http://167.99.115.105/bdmarsa/tercera/busEmpresa/actualizar",
				editEmpresa
			)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	//Estilo para centrar la caja del Modal
	const modalStyles = {
		transform: "translate(0,75%)",
	};

	return (
		<>
			<p className="btn-modal enlace" onClick={toggleModal}>
				Editar
			</p>

			<Modal isOpen={modal} style={modalStyles}>
				<form>
					<ModalHeader>Editar Empresa</ModalHeader>
					<ModalBody>
						<FormGroup>
							<Label for="ruc">R.U.C.</Label>
							<Input
								type="text"
								id="ruc"
								name="ruc"
								value={_ruc}
								/* onChange={handleChange} */
								{...register("ruc", {
									required: true,
								})}
							/>
							<Label for="nombre_empresa">Nombre de Empresa</Label>
							<Input
								type="text"
								id="nombre_empresa"
								name="nombre_empresa"
								/* onChange={handleChange} */
								{...register("nombre_empresa", {
									required: true,
								})}
							/>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={toggleModal}>
							Cerrar
						</Button>
						<Button color="primary" onSubmit={onSubmit}>
							Editar
						</Button>
					</ModalFooter>
				</form>
			</Modal>
		</>
	);
};
