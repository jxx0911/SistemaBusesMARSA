import React, { useState } from "react";
import { Excel } from "../../helpers/Excel";
import { useSedes } from "../../hooks/useSedes";
import { useServicios } from "../../hooks/useServicios";
import { Fecha } from "../../helpers/Fecha";
import { getJsDateFromExcel } from "excel-date-to-js";
/* import { helpHttp } from "../../helpers/helpHttp"; */
import axios from "axios";

import "../../App.css";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";

const initialForm = {
	cod_servicio: "",
	nombre_sede: "",
	fecha_salida: "",
};

const initialLote = {
	cod_servicio: "",
	nombre_servicio: "",
	cod_sede: "",
	nombre_sede: "",
	fecha_actual: "", // toLocalDateString()
	hora: "", // toLocalTimeString()
	fecha_salida: "", // form.fecha_salida
};

let sedeLote = "";
let servicioLote = "";
let lote = {};
let informacionInicial = {
	ruc: "20477167561",
	id_historia_login: 2,
};
let datosJson = {};
let day = new Date();

function Tabla() {
	/* let api = helpHttp(); */
	const { importExcel, datos, colDefs } = Excel();

	if (datos) {
		datosJson = datos[0];
	}

	const { sedes } = useSedes();
	const { servicios } = useServicios();
	const [band, setBand] = useState(false);

	/* const [loading, setLoading] = useState(false); */
	/* const [enable, setEnable] = useState(false); */
	const [file, setFile] = useState(false);
	/* const [register, setRegister] = useState(false); */
	const [form, setForm] = useState(initialForm);

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	if (band) {
		sedes.forEach((valor) => {
			if (valor.sede === form.nombre_sede) {
				sedeLote = valor.cod_sede.toString();
			}
		});

		servicios.forEach((valor) => {
			if (valor.id_servicio === parseInt(form.cod_servicio)) {
				servicioLote = valor.nombre_servicio;
			}
		});
	}

	const validarLote = async (e) => {
		const resp1 = await fetch(
			`http://167.99.115.105/bdmarsa/tercera/lote/validar?cod_servicio=${form.cod_servicio}&nombre_sede=${form.nombre_sede}&fecha_salida=${form.fecha_salida}`
		);
		const data1 = await resp1.json();
		const validacion = data1[0]["respuesta"];

		if (validacion === "SI") {
			alert("El Lote ya existe");
			setForm(initialForm);
		} else if (validacion === "NO") {
			setBand(!band);
			lote = {
				cod_servicio: form.cod_servicio,
				nombre_servicio: servicioLote,
				cod_sede: sedeLote,
				nombre_sede: form.nombre_sede,
				fecha_actual: Fecha().fechaHoy,
				hora: day.toLocaleTimeString(),
				fecha_salida: form.fecha_salida,
			};
			informacionInicial = {
				...informacionInicial,
				nombre_sede: form.nombre_sede,
				fecha_salida_formulario: form.fecha_salida,
				cod_Servicio: parseInt(form.cod_servicio),
			};

			setFile(!file);
		}
	};

	const registrarLote = async () => {
		console.log(lote);
		const resp2 = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/lote/registrar",
			lote
		);

		const { data } = resp2;
		const respuesta = data.Respuesta;

		/* if (respuesta === "OK") {
			
		} */

		/* const { data } = resp; */

		/* const resp2 = await axios.post(
				"http://167.99.115.105/bdmarsa/tercera/lote/registrar",
				lote
			);
	
			const { data } = resp2;
			const respuesta = data.Respuesta;
	
			if (respuesta === "OK") {
			} */
	};

	const registrarInformacion = async () => {
		informacionInicial = {
			...informacionInicial,
			resultp2: "",
			asistencia: "",
		};
		let body = Object.assign(datosJson, informacionInicial);
		console.log("llego informacion importada");
		console.log(body);
		const resp = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/infoImportada/registrada",
			body
		);
		console.log(resp);
	};

	console.log(datos);

	return (
		<>
			<div className="App">
				<h1 align="center">TABLE IMPORT</h1>
				{/* <h4 align="center">Descripcion</h4> */}
				<div className="container">
					{/* Select para Sede */}
					<div>
						<div className="form-label">SEDE</div>
						<select
							name="nombre_sede"
							className="form-select"
							onChange={handleInputChange}
							value={form.nombre_sede}
						>
							<option defaultValue> -- SELECCIONE SEDE -- </option>
							{sedes.map((item, index) => (
								<option key={index} value={item.sede}>
									{item.sede}
								</option>
							))}
						</select>
					</div>
					{/* Select para Servicio */}
					<div>
						<div className="form-label">SERVICIO</div>
						<select
							className="form-select"
							onChange={handleInputChange}
							value={form.cod_servicio}
							name="cod_servicio"
						>
							<option defaultValue> -- SELECCIONE SERVICIO -- </option>
							{servicios.map((item, index) => (
								<option key={index} value={item.id_servicio}>
									{item.nombre_servicio}
								</option>
							))}
						</select>
					</div>
					{/* Input para fecha */}
					<div>
						<div>
							<label className="form-label">FECHA DE SALIDA</label>
							<input
								type="date"
								className="form-control"
								name="fecha_salida"
								placeholder="Input placeholder"
								onChange={handleInputChange}
								value={form.fecha_salida}
							/>
						</div>
						<button
							className="btn btn-dark"
							onClick={validarLote}
							disabled={file ? "disabled" : ""}
						>
							Validar Lote
						</button>

						{/* {file ? (
							<>
								<input className="col-3" type="file" onChange={importExcel} />
							</>
						) : (
							""
						)} */}
						<input className="col-3" type="file" onChange={importExcel} />
					</div>
				</div>

				<div className="table-responsive">
					<MaterialTable title="Marsa Data" data={datos} columns={colDefs} />
				</div>
				<button className="btn btn-success" onClick={registrarLote}>
					Registrar
				</button>
				<button className="btn btn-success" onClick={registrarInformacion}>
					Registrar2
				</button>
			</div>
		</>
	);
}

export default Tabla;
