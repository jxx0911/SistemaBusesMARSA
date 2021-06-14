import React, { useState } from "react";
import "./App.css";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";
import XLSX from "xlsx";

const EXTENSIONS = ["xlsx", "xls", "csv"];
function Tabla() {
	const [colDefs, setColDefs] = useState();
	const [data, setData] = useState();

	const getExention = (file) => {
		const parts = file.name.split(".");
		const extension = parts[parts.length - 1];
		return EXTENSIONS.includes(extension); // return boolean
	};

	const convertToJson = (headers, data) => {
		const rows = [];
		data.forEach((row) => {
			let rowData = {};
			row.forEach((element, index) => {
				rowData[headers[index]] = element;
			});
			rows.push(rowData);
		});
		return rows;
	};

	const importExcel = (e) => {
		const file = e.target.files[0];

		const reader = new FileReader();
		reader.onload = (event) => {
			//parse data

			const bstr = event.target.result;
			const workBook = XLSX.read(bstr, { type: "binary" });

			//get first sheet
			const workSheetName = workBook.SheetNames[0];
			const workSheet = workBook.Sheets[workSheetName];
			//convert to array
			const fileData = XLSX.utils.sheet_to_json(workSheet, { header: 1 });
			// console.log(fileData)
			const headers = fileData[0];
			const heads = headers.map((head) => ({ title: head, field: head }));
			setColDefs(heads);
			console.log(colDefs);

			//removing header
			fileData.splice(0, 1);

			setData(convertToJson(headers, fileData));
		};

		if (file) {
			if (getExention(file)) {
				reader.readAsBinaryString(file);
			} else {
				alert("Invalid file input, Select Excel, CSV file");
			}
		} else {
			setData([]);
			setColDefs([]);
		}
	};

	{
		/* <input className="col-3" type="file" onChange={importExcel} /> */
	}

	return (
		<div className="App">
			<h1 align="center">TABLE IMPORT</h1>
			{/* <h4 align="center">Descripcion</h4> */}
			<div className="container d-flex flex-column flex-lg-row">
				{/* Select para Sede */}
				<div className="m-3 col-lg-4">
					<div className="form-label">SEDE</div>
					<select className="form-select">
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
				{/* Select para Servicio */}
				<div className="m-3 col-lg-4">
					<div className="form-label">SERVICIO</div>
					<select className="form-select">
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
				{/* Input para fecha */}
				<div className="m-3 col-lg-4">
					<label className="form-label">FECHA DE ATENCION</label>
					<input
						type="date"
						className="form-control"
						name="example-text-input"
						placeholder="Input placeholder"
					/>
				</div>
			</div>

			<div className="table-responsive">
				<MaterialTable title="Marsa Data" data={data} columns={colDefs} />
			</div>
		</div>
	);
}

export default Tabla;
