import React, { useEffect, useState } from "react";
import { Excel } from "../../helpers/Excel";
import { useSedes } from "../../hooks/useSedes";
import { useServicios } from "../../hooks/useServicios";
import { helpHttp } from "../../helpers/helpHttp";
import axios from "axios";

import "../../App.css";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";

const initialForm = {
	cod_servicio: "",
	nombre_sede: "",
	fecha_salida: "",
};

function Tabla() {
	let api = helpHttp();
	const { importExcel, data, colDefs } = Excel();
	const { sedes } = useSedes();
	const { servicios } = useServicios();
	/* const [loading, setLoading] = useState(false); */
	const [form, setForm] = useState(initialForm);

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	console.log(form);

	/* const validarLote = async () => {
		await axios
			.get(
				`http://167.99.115.105/bdmarsa/tercera/lote/validar?cod_servicio=${}&nombre_sede=${}&fecha_salida=${}`
			)
	} */

	return (
		<>
			<div className="App">
				<h1 align="center">TABLE IMPORT</h1>
				{/* <h4 align="center">Descripcion</h4> */}
				<div className="container table-inputs">
					{/* Select para Sede */}
					<div className="sede">
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
					<div className="servicio">
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
					<div className="fecha">
						<label className="form-label">FECHA DE ATENCION</label>
						<input
							type="date"
							className="form-control"
							name="fecha_salida"
							placeholder="Input placeholder"
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<div className="container mt-1">
					<div className="botones">
						<button
							className="btn btn-primary generar" /* onClick={validarLote} */
						>
							Generar Lote
						</button>
					</div>
					<input className="col-3" type="file" onChange={importExcel} />
				</div>

				<div className="table-responsive">
					<MaterialTable title="Marsa Data" data={data} columns={colDefs} />
				</div>
				<button className="btn btn-success registrar">Registrar</button>
			</div>
		</>
	);
}

export default Tabla;
