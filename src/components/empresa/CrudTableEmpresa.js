import React from "react";
import CrudTableRowEmpresa from "./CrudTableRowEmpresa";

const CrudTableEmpresa = ({ data, setDataToEdit }) => {
	return (
		<div className="container mt-3 table-responsive">
			<table className="table">
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
							<CrudTableRowEmpresa
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

export default CrudTableEmpresa;
