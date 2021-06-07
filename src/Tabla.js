import React, { useState } from "react";
import * as XLSX from "xlsx";

function Tabla() {
	const [items, setItems] = useState([]);

	const readExcel = (file) => {
		const promise = new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsArrayBuffer(file);

			fileReader.onload = (e) => {
				const bufferArray = e.target.result;

				const wb = XLSX.read(bufferArray, { type: "buffer" });

				const wsname = wb.SheetNames[0];

				const ws = wb.Sheets[wsname];

				const data = XLSX.utils.sheet_to_json(ws);

				resolve(data);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});

		promise.then((d) => {
			console.log(d);
			setItems(d);
		});
	};

	return (
		<div>
			<input
				type="file"
				onChange={(e) => {
					const file = e.target.files[0];
					readExcel(file);
				}}
			/>

			<table class="table container">
				<thead>
					<tr>
						<th scope="col">Sede</th>
						<th scope="col">Clinica</th>
						<th scope="col">Codigo</th>
					</tr>
				</thead>
				<tbody>
					{items.map((d, index) => (
						<tr key={index}>
							<th>{d.SEDE}</th>
							<td>{d.CLINICA}</td>
							<td>{d.CODIGO}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Tabla;
