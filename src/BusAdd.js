import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const BusAdd = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		axios
			.post("http://192.168.68.116:3002/bd/bus/insertar", data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
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
								<label className="form-label required">Empresa</label>
								<input
									type="text"
									className="form-control"
									autocomplete="off"
									placeholder="Ingrese Empresa"
									style={{ textTransform: "uppercase" }}
									name="empresa"
									{...register("empresa", {
										required: true,
									})}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label required">Placa</label>
								<input
									type="text"
									className="form-control"
									autocomplete="off"
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
									autocomplete="off"
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
	);
};
