import React from "react";
import { HistorialItem } from "./HistorialItem";
import Navbar from "./Navbar";

export const Historial = () => {
	return (
		<>
			<Navbar />
			<div className="container table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th scope="col"># Lote</th>
							<th scope="col">Fecha de Atencion</th>
							<th scope="col">Sede</th>
							<th scope="col">Servicio</th>
							<th scope="col">Usuario</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<HistorialItem />
					</tbody>
				</table>
			</div>
		</>
	);
};
