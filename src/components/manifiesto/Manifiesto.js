import React, { useState } from "react";
import { ManifiestoItem } from "./ManifiestoItem";

export const Manifiesto = () => {
	const [fecha, setFecha] = useState("");

	const handleChange = (e) => {
		setFecha(...fecha, e.target.value);
	};

	console.log(fecha);

	return (
		<>
			<div className="d-flex container">
				<label className="form-label" style={{ marginTop: "25px" }}>
					INGRESE FECHA:
				</label>
				<input
					type="date"
					onChange={handleChange}
					name="fecha_act"
					className="form-control"
					value={fecha}
					style={{ width: "500px", marginLeft: "5rem", margin: "1rem" }}
				/>
			</div>
			<div className="container table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th scope="col"># Bus</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<ManifiestoItem fecha={fecha} />
					</tbody>
				</table>
			</div>
		</>
	);
};
