import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./Modal.css";
import axios from "axios";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	FormGroup,
	Input,
	Label,
} from "reactstrap";

export const ModalState = () => {
	//Estado del Modal
	const [modal, setModal] = useState(false);

	//Funcion para alterar el estado del Modal
	const toggleModal = () => {
		setModal(!modal);
	};

	//Estilo para centrar la caja del Modal
	const modalStyles = {
		transform: "translate(0,75%)",
	};

	//
	const { register, handleSubmit } = useForm();

	//Funcion onSubmit para la peticion http
	const onSubmit = (data, e) => {
		const { nombre_empresa, ruc } = data;
		const http = {
			ruc,
			nombre_empresa: nombre_empresa.toUpperCase(),
		};
		console.log(data);
		axios
			.post("http://167.99.115.105/bdmarsa/tercera/busEmpresa/registrar", http)
			.then((response) => {
				console.log(response);
				if (response) e.target.reset();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<p className="btn-modal enlace" onClick={toggleModal}>
				Agregar
			</p>

			<Modal isOpen={modal} style={modalStyles}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<ModalHeader>Agregar Empresa</ModalHeader>
					<ModalBody>
						<FormGroup>
							<Label for="ruc">R.U.C.:</Label>
							<Input
								type="text"
								id="ruc"
								name="ruc"
								{...register("ruc", {
									required: true,
								})}
							/>
							<Label for="nombre_empresa">Empresa:</Label>
							<Input
								type="text"
								id="nombre_empresa"
								name="nombre_empresa"
								{...register("nombre_empresa", {
									required: true,
								})}
							/>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button type="submit" color="primary">
							Agregar
						</Button>
						<Button color="secondary" onClick={toggleModal}>
							Cerrar
						</Button>
					</ModalFooter>
				</form>
			</Modal>
		</>
	);
};
