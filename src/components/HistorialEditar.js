import React from "react";
import "../App.css";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Excel } from "../Excel";
import Navbar from "./Navbar";

function HistorialEditar() {
	const { importExcel, data, colDefs } = Excel();

	return (
		<>
			<Navbar />
			<div className="App">
				<h1 align="center">TABLE IMPORT</h1>
				{/* <h4 align="center">Descripcion</h4> */}
				<div className="container table-inputs">
					{/* Select para Sede */}
					<div className="sede">
						<div className="form-label">SEDE</div>
						<select className="form-select">
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
					{/* Select para Servicio */}
					<div className="servicio">
						<div className="form-label">SERVICIO</div>
						<select className="form-select">
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
						</select>
					</div>
					{/* Input para fecha */}
					<div className="fecha">
						<label className="form-label">FECHA DE ATENCION</label>
						<input
							type="date"
							className="form-control"
							name="example-text-input"
							placeholder="Input placeholder"
						/>
					</div>
				</div>
				<div className="container mt-1">
					<div className="grid-editar ">
						<div className="lote d-flex">
							<label style={{ width: "5rem" }}># Lote: </label>
							<input
								className="form-control"
								type="text"
								name="codigoLote"
								value="abc"
								disabled={true}
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
