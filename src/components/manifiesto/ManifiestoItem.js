import React from "react";
import { Link } from "react-router-dom";
/* import { Fecha } from "../../helpers/Fecha"; */
import { ManifiestoBuses } from "./ManifiestoBuses";
import { ImTable } from "react-icons/im";

export const ManifiestoItem = () => {
	return (
		<>
			{ManifiestoBuses.map((item, index) => (
				<tr key={index}>
					<td className="align-middle">Bus Nº{item}</td>
					<td className="align-middle">
						<Link
							className="btn btn-primary m-2"
							to={{
								pathname: "/manifiesto-individual",
								state: {
									/* fecha_act: Fecha().fechaHoy, */
									fecha_act: "2021-07-21",
									placa: item,
								},
							}}
						>
							<ImTable />
						</Link>
					</td>
				</tr>
			))}
		</>
	);
};
