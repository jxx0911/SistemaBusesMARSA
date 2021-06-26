import React from "react";
import { Link } from "react-router-dom";

export const HistorialItem = () => {
	return (
		<tr>
			<th scope="row" className="align-middle">
				1
			</th>
			<td className="align-middle">Mark</td>
			<td className="align-middle">Otto</td>
			<td className="align-middle">@mdo</td>
			<td className="align-middle">Ricardo</td>
			<td className="d-flex align-middle">
				<Link to="/historial-editar" className="btn btn-warning m-2">
					Editar
				</Link>
				<button type="button" className="btn btn-danger m-2">
					Eliminar
				</button>
			</td>
		</tr>
	);
};
