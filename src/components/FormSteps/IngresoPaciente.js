import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Fecha } from "../../helpers/Fecha";
import axios from "axios";

const initialBody = {
	fecha_actual: "2021-07-07",
	nro_documento: "",
};

let resultados = {};

export const IngresoPaciente = ({
	imprimirPaciente,
	setImprimirPaciente,
	navigation,
}) => {
	const [form, setForm] = useState(initialBody);

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const importarPaciente = async (e) => {
		e.preventDefault();
		const resp = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/ticket/SegundaVista",
			form
		);

		const { data } = resp;

		if (data.length === 3) {
			if (data[0] === null) {
				resultados = {
					...resultados,
				};
			} else {
				const { dni, resultado, sintomatologia, fecha_examen } = data[0];

				resultados = {
					...form,
					dni: dni,
					resultado2: resultado,
					sintomatologia2: sintomatologia,
					fecha_examen2: fecha_examen.slice(0, 10),
				};
			}

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
					fecha_examen: fecha_examen.slice(0, 10),
				};
			}

			const { clinica, status, clave } = data[2];
			resultados = {
				...resultados,
				clinica: clinica,
				status: status,
				clave: clave,
			};
			setForm(resultados);
			setImprimirPaciente(resultados);
		} else if (data.length === 2) {
			const { dni, resultado, sintomatologia, fecha_examen } = data[0];
			resultados = {
				...form,
				dni: dni,
				resultado: resultado,
				sintomatologia: sintomatologia,
				fecha_examen: fecha_examen.slice(0, 10),
			};
			const { clinica, status, clave } = data[1];
			resultados = {
				...resultados,
				clinica: clinica,
				status: status,
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
						<h2>DATOS DE PACIENTE</h2>
					</div>
					<div className="card-body">
						<form>
							<fieldset className="form-fieldset">
								<div className="mb-3">
									<div className="d-flex flex-row">
										<input
											type="number"
											className="form-control"
											placeholder="Ingrese D.N.I."
											value={form.nro_documento}
											onChange={handleInputChange}
											name="nro_documento"
										/>
										<button
											className="btn btn-dark m-2"
											onClick={importarPaciente}
										>
											<ImSearch />
										</button>
									</div>
								</div>
								<div className="tab-pane active show" id="tabs-home-ex5">
									<div>
										<div className="d-flex">
											D.N.I. :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.dni ? form.dni : imprimirPaciente.dni}
											</p>
										</div>
										<br />
										<div className="d-flex">
											RESULTADO P1 :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.resultado
													? form.resultado
													: imprimirPaciente.resultado}
											</p>
										</div>
										<div className="d-flex">
											SINTOMATOLOGIA :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.sintomatologia
													? form.sintomatologia
													: imprimirPaciente.sintomatologia}
											</p>
										</div>
										<div className="d-flex">
											FECHA DE PRUEBA :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.fecha_examen
													? form.fecha_examen
													: imprimirPaciente.fecha_examen}
											</p>
										</div>
										<div className="d-flex">
											CLINICA :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.clinica ? form.clinica : imprimirPaciente.clinica}
											</p>
										</div>
										<br />
										<div className="d-flex">
											RESULTADO P2 :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.resultado2
													? form.resultado2
													: imprimirPaciente.resultado2}
											</p>
										</div>
										<div className="d-flex">
											SINTOMATOLOGIA :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.sintomatologia2
													? form.sintomatologia2
													: imprimirPaciente.sintomatologia2}
											</p>
										</div>
										<div className="d-flex">
											FECHA DE PRUEBA :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.fecha_examen2
													? form.fecha_examen2
													: imprimirPaciente.fecha_examen2}
											</p>
										</div>
										<div className="d-flex">
											CLINICA :&nbsp;
											<p style={{ color: "blue", fontWeight: "bold" }}>
												{form.clinica ? form.clinica : imprimirPaciente.clinica}
											</p>
										</div>
										<br /> {""}
									</div>
								</div>
								<div>
									<button
										className="btn btn-primary mt-3 float-end"
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
