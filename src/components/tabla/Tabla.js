import React, { useEffect, useState } from "react";
import { Excel } from "../../helpers/Excel";
import { useSedes } from "../../hooks/useSedes";
import { useServicios } from "../../hooks/useServicios";
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

function Tabla() {
	/* let api = helpHttp(); */
	const { importExcel, data, colDefs } = Excel();
	const { sedes } = useSedes();
	const [sedeLote, setSedeLote] = useState();
	const { servicios } = useServicios();
	const [servicioLote, setServicioLote] = useState();
	/* const [loading, setLoading] = useState(false); */
	const [form, setForm] = useState(initialForm);

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	/* 
	console.log(form.fecha_salida);
	let fecha = form.fecha_salida.toLocaleDateString("en-US");
	console.log(fecha); */

	const validarLote = async () => {
		await axios
			.get(
				`http://167.99.115.105/bdmarsa/tercera/lote/validar?cod_servicio=${form.cod_servicio}&nombre_sede=${form.nombre_sede}&fecha_salida=06/19/2021`
			)
			.then((response) => {
				console.log(response);
			});
	};

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
							<label className="form-label">FECHA DE ATENCION</label>
							<input
								type="date"
								className="form-control"
								name="fecha_salida"
								placeholder="Input placeholder"
								onChange={handleInputChange}
							/>
						</div>
						<button className="btn btn-dark" onClick={validarLote}>
							Generar Lote
						</button>
						<button className="btn btn-primary">Registrar Lote</button>
						<input className="col-3" type="file" onChange={importExcel} />
					</div>
				</div>

				<div className="table-responsive">
					<MaterialTable title="Marsa Data" data={data} columns={colDefs} />
				</div>
				<button className="btn btn-success">Registrar</button>
			</div>
		</>
	);
}

export default Tabla;
