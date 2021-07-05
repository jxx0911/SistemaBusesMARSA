import React from "react";
import CrudTableRowBus from "./CrudTableRowBus";

const CrudTableBus = ({ data, setDataToEdit }) => {
	return (
		<div className="container mt-3 table-responsive">
			<table className="table">
				<thead>
					<tr>
						<th>Placa</th>
						<th>Empresa</th>
						<th>Capacidad</th>
						<th>Conductor</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map((el, index) => (
							<CrudTableRowBus
								key={index}
								el={el}
								setDataToEdit={setDataToEdit}
							/>
						))
					) : (
						<tr>
							<td colSpan="3">Sin datos</td>
						</tr>
					)}
				</tbody>
			</table>
		</div>
	);
};

export default CrudTableBus;
