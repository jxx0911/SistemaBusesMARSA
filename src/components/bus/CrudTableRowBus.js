import React from "react";

const CrudTableRowBus = ({ el, setDataToEdit }) => {
	let { placa, empresa, capacidad, chofer, chofer2 } = el;

	return (
		<tr>
			<td>{placa}</td>
			<td>{empresa}</td>
			<td>{capacidad}</td>
			<td>{chofer}</td>
			<td>{chofer2}</td>
			<td>
				<button className="btn btn-primary" onClick={() => setDataToEdit(el)}>
					Editar
				</button>
			</td>
		</tr>
	);
};

export default CrudTableRowBus;
