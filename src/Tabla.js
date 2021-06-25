import React from "react";
import "./App.css";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";
import { Excel } from "./Excel";
import Navbar from "./components/Navbar";
import { useSedes } from "./components/hooks/useSedes";
import { useServicios } from "./components/hooks/useServicios";

function Tabla() {
	const { importExcel, data, colDefs } = Excel();
	const { sedes } = useSedes();
	const { servicios } = useServicios();

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
						<select className="form-select">
							{servicios.map((item, index) => (
								<option key={index} value={item.nombre_servicio}>
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
							name="example-text-input"
							placeholder="Input placeholder"
						/>
					</div>
				</div>
				<div className="container mt-1">
					<div className="botones">
						<button className="btn btn-primary generar">Generar Lote</button>
						<button className="btn btn-danger limpiar">Limpiar</button>
						<button className="btn btn-success registrar">Registrar</button>
					</div>
					<input className="col-3" type="file" onChange={importExcel} />
				</div>

				<div className="table-responsive">
					<MaterialTable title="Marsa Data" data={data} columns={colDefs} />
				</div>
			</div>
		</>
	);
}

export default Tabla;
