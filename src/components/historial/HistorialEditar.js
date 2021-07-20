import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MaterialTable from "material-table";
import { Excel } from "../../helpers/Excel";
import axios from "axios";
import { HeadersData } from "../../helpers/HeadersData";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

function HistorialEditar() {
	const [form, setForm] = useState({});

	const { importExcel, data, colDefs, setDatos, setColDefs } = Excel();
	const location = useLocation();
	const cod_lote = location.state?.cod_lote;
	const fecha_salida = location.state?.fecha_salida;
	const nombre_sede = location.state?.nombre_sede;
	const nombre_servicio = location.state?.nombre_servicio;

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		axios
			.get(
				`http://167.99.115.105/bdmarsa/tercera/mostrar/ContenidoLoteEditable?cod_lote=${cod_lote}`
			)
			.then((response) => {
				console.log(response);
			});
	}, [cod_lote]);

	return (
		<>
			<div className="App">
				<h1 align="center">TABLE IMPORT</h1>
				{/* <h4 align="center">Descripcion</h4> */}
				<div className="container table-inputs">
					{/* Select para Sede */}
					<div className="sede">
						<div className="form-label">SEDE</div>
						<input
							type="text"
							className="form-control"
							value={nombre_sede}
							onChange={handleChange}
							readOnly
						/>
					</div>
					{/* Select para Servicio */}
					<div className="servicio">
						<div className="form-label">SERVICIO</div>
						<input
							type="text"
							className="form-control"
							value={nombre_servicio}
							onChange={handleChange}
							readOnly
						/>
					</div>
					{/* Input para fecha */}
					<div className="fecha">
						<label className="form-label">FECHA DE ATENCION</label>
						<input
							type="text"
							className="form-control"
							value={fecha_salida}
							onChange={handleChange}
							readOnly
						/>
					</div>
				</div>
				<div className="container mt-1">
					<div className="grid-editar ">
						<div className="lote d-flex">
							<label style={{ width: "5rem" }}>Codigo: </label>
							<input
								className="form-control"
								type="text"
								value={cod_lote}
								onChange={handleChange}
								readOnly
							/>
						</div>
						<div className="subir">
							<input className="col" type="file" onChange={importExcel} />
						</div>
						<div className="registrarEditar">
							<button className="btn btn-success">Registrar</button>
						</div>
					</div>
				</div>

				<div className="table-responsive">
					<MaterialTable title="Marsa Data" data={data} columns={colDefs} />
				</div>
			</div>
		</>
	);
}

export default HistorialEditar;
