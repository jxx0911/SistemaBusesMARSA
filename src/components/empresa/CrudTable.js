import React from "react";
import CrudTableRow from "./CrudTableRow";

const CrudTable = ({ data, setDataToEdit }) => {
	return (
		<div>
			<h3>Tabla de Empresas</h3>
			<table>
				<thead>
					<tr>
						<th>R.U.C.</th>
						<th>Empresa</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody>
					{data.length > 0 ? (
						data.map((el, index) => (
							<CrudTableRow key={index} el={el} setDataToEdit={setDataToEdit} />
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

export default CrudTable;
