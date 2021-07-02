import React from "react";

const CrudTableRowBus = ({ el, setDataToEdit }) => {
	let { placa, empresa, capacidad, chofer } = el;

	return (
		<tr>
			<td>{placa}</td>
			<td>{empresa}</td>
			<td>{capacidad}</td>
			<td>{chofer}</td>
			<td>
				<button onClick={() => setDataToEdit(el)}>Editar</button>
			</td>
		</tr>
	);
};

export default CrudTableRowBus;
