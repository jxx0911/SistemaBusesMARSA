import React from "react";

const CrudTableRowEmpresa = ({ el, setDataToEdit }) => {
	let { ruc, nombre_empresa } = el;

	return (
		<tr>
			<td>{ruc}</td>
			<td>{nombre_empresa}</td>
			<td>
				<button onClick={() => setDataToEdit(el)}>Editar</button>
			</td>
		</tr>
	);
};

export default CrudTableRowEmpresa;
