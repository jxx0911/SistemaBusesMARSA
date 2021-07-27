import React from "react";
import { ManifiestoItem } from "./ManifiestoItem";

export const Manifiesto = () => {
	return (
		<>
			<div className="container table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th scope="col"># Bus</th>
							<th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<ManifiestoItem />
					</tbody>
				</table>
			</div>
		</>
	);
};
