import React, { useState } from "react";
import { useConfig } from "../../hooks/useConfig";
import { useForm } from "react-hook-form";
import { Fecha } from "../../helpers/Fecha";
import axios from "axios";

export const Config = () => {
	const { mensaje, aforo } = useConfig();
	const { register, handleSubmit } = useForm();
	const [edit, setEdit] = useState(true);
	const [datosConfig, setDatosConfig] = useState({
		aforo: "",
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
			[e.target.value]: e.target.value,
		});
	};

	console.log(datosConfig);

	const onSubmit = (data) => {
		let newData = {
			...data,
			fecha: Fecha().fechaHoy,
		};
		console.log(newData);
		axios
			.post("http://167.99.115.105/bd/configuracion/insertar", newData)
			.then((response) => {
				console.log(response);
				setEdit(!edit);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<>
			<div className="container-tight py-4">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h2>CONFIGURACION</h2>
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
											onChange={handleInputChange}
											readOnly
										/>
									) : (
										<input
											type="text"
											className="form-control"
											name="aforo"
											placeholder={"Ingresa Aforo"}
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
											onChange={handleInputChange}
											maxLength="100"
											readOnly
										/>
									) : (
										<textarea
											className="form-control"
											name="mensaje"
											placeholder={mensaje}
											maxLength="100"
											onChange={handleInputChange}
											{...register("mensaje", {
												required: true,
											})}
										/>
									)}
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
