import React from "react";
import { HistorialItem } from "./HistorialItem";

export const Historial = () => {
	return (
		<>
			<div className="container table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th scope="col"># Lote</th>
							<th scope="col">Codigo</th>
							<th scope="col">Fecha de Atencion</th>
							<th scope="col">Sede</th>
							<th scope="col">Servicio</th>
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
