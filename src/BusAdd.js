import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ModalState } from "./ModalState";
import { ModalStateEditar } from "./ModalStateEditar";
import Navbar from "./components/Navbar";

export const BusAdd = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		const { empresa, placa, capacidad } = data;
		const http = {
			empresa: empresa.toUpperCase(),
			placa: placa.toUpperCase(),
			capacidad,
		};
		axios
			.post("http://167.99.115.105/bd/bus/insertar", http)
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
			<Navbar />
			<div className="container-tight py-4">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h1 className>REGISTRO DE BUSES</h1>
						<p className="text-muted">
							lorem ipsum dolor sit amet, consectetur adip
						</p>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit(onSubmit)}>
							<fieldset className="form-fieldset">
								<div className="mb-3">
									<div className="d-flex justify-content-between">
										<label className="form-label required">Empresa</label>
										<div className="d-flex">
											<ModalStateEditar />
											<ModalState />
										</div>
									</div>
									<select
										className="form-select"
										name="empresa"
										{...register("empresa", {
											required: true,
										})}
									>
										<option value="One">One</option>
										<option value="Two">Two</option>
										<option value="Three">Three</option>
									</select>
								</div>
								<div className="mb-3">
									<label className="form-label required">Placa</label>
									<input
										type="text"
										className="form-control"
										autoComplete="off"
										placeholder="Ingrese Placa"
										style={{ textTransform: "uppercase" }}
										name="placa"
										{...register("placa", {
											required: true,
										})}
									/>
								</div>
								<div className="mb-3">
									<label className="form-label required">Capacidad</label>
									<input
										type="number"
										className="form-control"
										autoComplete="off"
										placeholder="Ingrese capacidad"
										name="capacidad"
										{...register("capacidad", {
											required: true,
										})}
									/>
								</div>
								<div className="col-6 col-sm-4  mb-3 float-end">
									<button className="btn btn-primary w-100">Registrar</button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
