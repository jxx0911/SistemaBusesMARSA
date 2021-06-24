import React, { useState } from "react";
import { useConfig } from "./hooks/useConfig";
import { useForm } from "react-hook-form";
import axios from "axios";
import Navbar from "./Navbar";

const date = new Date();
const dia = date.toLocaleDateString("en-US");

export const Config = () => {
	const { mensaje, aforo } = useConfig();
	const { register, handleSubmit } = useForm();
	const [edit, setEdit] = useState(true);
	const [datosConfig, setDatosConfig] = useState({
		aforo: "",
		date: date.toLocaleDateString(),
		mensaje: "",
	});

	const handleEdit = (e) => {
		e.preventDefault();
		setEdit(!edit);
	};

	const handleInputChange = (e) => {
		console.log(e.target.name);
		setDatosConfig({
			...datosConfig,
			[e.target.aforo]: e.target.value,
		});
	};

	const onSubmit = (data) => {
		console.log(data);
		axios
			.post("http://167.99.115.105/bd/configuracion/insertar", data)
			.then((response) => {
				console.log(response);
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
						<h1>CONFIGURACION</h1>
						<p className="text-muted">
							lorem ipsum dolor sit amet, consectetur adip
						</p>
					</div>
					<div className="card-body">
						<form onSubmit={handleSubmit(onSubmit)}>
							<fieldset className="form-fieldset">
								<div className="mb-3">
									<label className="form-label">Aforo</label>
									{edit ? (
										<input
											type="text"
											className="form-control"
											name="aforo"
											placeholder={aforo}
											value={aforo}
											disabled={edit}
										/>
									) : (
										<input
											type="text"
											className="form-control"
											name="aforo"
											placeholder={"Ingresa Aforo"}
											disabled={edit}
											onChange={handleInputChange}
											{...register("aforo", {
												required: true,
											})}
										/>
									)}
								</div>
								{/* falta añadir el script para el conteo de palabras del Text Area */}
								<div className="mb-3">
									<label className="form-label">Textarea</label>
									{edit ? (
										<textarea
											className="form-control"
											name="mensaje"
											placeholder={mensaje}
											value={mensaje}
											maxLength="100"
											disabled={edit}
										/>
									) : (
										<textarea
											className="form-control"
											name="mensaje"
											placeholder={mensaje}
											maxLength="100"
											disabled={edit}
											onChange={handleInputChange}
											{...register("mensaje", {
												required: true,
											})}
										/>
									)}
									<div id="contador">0/50</div>
								</div>
								<div className="mb-3">
									<label className="form-label">Fecha</label>
									<input
										type="text"
										className="form-control"
										name="fecha"
										placeholder={dia}
										value={dia}
										{...register("fecha", {
											required: true,
										})}
									/>
								</div>
								<div className="col-sm-12 mb-3 d-flex justify-content-between">
									<button
										type="reset"
										className="btn btn-primary "
										onClick={handleEdit}
									>
										Editar
									</button>
									<button type="submit" className="btn btn-success ">
										Guardar
									</button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
