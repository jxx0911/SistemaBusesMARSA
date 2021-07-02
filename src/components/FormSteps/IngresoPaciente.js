import React, { useState } from "react";
import $ from "jquery";
import { ImSearch } from "react-icons/im";
import { Fecha } from "../../helpers/Fecha";
import axios from "axios";

const initialBody = {
	fecha_actual: Fecha().fechaHoy,
	nro_documento: "",
};

let resultados = {};

export const IngresoPaciente = ({
	imprimirPaciente,
	setImprimirPaciente,
	navigation,
}) => {
	const [form, setForm] = useState(initialBody);
	/* const [status, setStatus] = useState(false); */

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	$(document).ready(function () {
		$("form").keypress(function (e) {
			if (e.which === 13) {
				return false;
			}
		});
	});

	const importarPaciente = async (e) => {
		e.preventDefault();

		const resp = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/ticket/SegundaVista",
			form
		);
		const { data } = resp;

		if (data.length === 3) {
			console.log("aca 1");
			const { dni, resultado, sintomatologia, fecha_examen } = data[0];
			resultados = {
				...form,
				dni: dni,
				resultado2: resultado,
				sintomatologia2: sintomatologia,
				fecha_examen2: fecha_examen,
			};

			if (data[1] === null) {
				resultados = {
					...resultados,
				};
			} else {
				const { resultado, sintomatologia, fecha_examen } = data[1];
				resultados = {
					...resultados,
					resultado: resultado,
					sintomatologia: sintomatologia,
					fecha_examen: fecha_examen,
				};
			}

			const { clinica, clave } = data[2];
			resultados = {
				...resultados,
				clinica: clinica,
				clave: clave,
			};
			console.log("aca 2");
			setForm(resultados);
			setImprimirPaciente(resultados);
		} else if (data.length === 2) {
			const { dni, resultado, sintomatologia, fecha_examen } = data[0];
			resultados = {
				...form,
				dni: dni,
				resultado: resultado,
				sintomatologia: sintomatologia,
				fecha_examen: fecha_examen,
			};
			const { clinica, clave } = data[1];
			resultados = {
				...resultados,
				clinica: clinica,
				clave: clave,
			};
			setForm(resultados);
			setImprimirPaciente(resultados);
		}
	};

	return (
		<>
			<div className="container-tight py-2">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h1 className>DATOS DE PACIENTE</h1>
						<p className="text-muted">
							lorem ipsum dolor sit amet, consectetur adip
						</p>
					</div>
					<div className="card-body">
						<form>
							<fieldset className="form-fieldset">
								<div className="mb-3">
									<label className="form-label required">D.N.I.</label>
									<input
										type="number"
										className="form-control"
										placeholder="Ingrese D.N.I."
										style={{ textTransform: "uppercase" }}
										value={form.nro_documento}
										onChange={handleInputChange}
										name="nro_documento"
										autoFocus
									/>
									<button className="btn btn-dark" onClick={importarPaciente}>
										<ImSearch />
									</button>
								</div>
								<div className="tab-pane active show" id="tabs-home-ex5">
									<div>
										D.N.I. : {form.dni ? form.dni : imprimirPaciente.dni}
										<br />
										<br />
										RESULTADO P1 :{" "}
										{form.resultado
											? form.resultado
											: imprimirPaciente.resultado}
										<br />
										SINTOMATOLOGIA :{" "}
										{form.sintomatologia
											? form.sintomatologia
											: imprimirPaciente.sintomatologia}
										<br />
										FECHA DE PRUEBA :{" "}
										{form.fecha_examen
											? form.fecha_examen
											: imprimirPaciente.fecha_examen}
										<br />
										CLINICA :{" "}
										{form.clinica ? form.clinica : imprimirPaciente.clinica}
										<br />
										<br />
										RESULTADO P2 :{" "}
										{form.resultado2
											? form.resultado2
											: imprimirPaciente.resultado2}
										<br />
										SINTOMATOLOGIA :{" "}
										{form.sintomatologia2
											? form.sintomatologia2
											: imprimirPaciente.sintomatologia2}
										<br />
										FECHA DE PRUEBA :{" "}
										{form.fecha_examen2
											? form.fecha_examen2
											: imprimirPaciente.fecha_examen2}
										<br />
										CLINICA :{" "}
										{form.clinica ? form.clinica : imprimirPaciente.clinica}
										<br /> {""}
									</div>
								</div>
								<div className="col-sm-12 mb-3 d-flex justify-content-between">
									<button
										className="btn btn-dark"
										onClick={() => navigation.previous()}
									>
										Atras
									</button>
									<button
										className="btn btn-primary"
										onClick={() => navigation.next()}
									>
										Siguiente
									</button>
									{/* <button href="#" class="btn btn-primary disabled w-100">
									Primary
								</button> */}
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
