import { useState } from "react";
import XLSX from "xlsx";

export const Excel = () => {
	const EXTENSIONS = ["xlsx", "xls", "csv"];
	const { getJsDateFromExcel } = require("excel-date-to-js");

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

	function ExcelDateToJSDate(serial) {
		let fechaMonth1 = "";
		let fechaMonth2 = "";
		let utc_days = Math.floor(serial - 25569);
		let utc_value = utc_days * 86400;
		let date_info = new Date(utc_value * 1000);

		let day = date_info.getDate();
		let month = date_info.getMonth() + 1;
		let year = date_info.getFullYear();

		if (month < 10) {
			fechaMonth1 = `${day}/0${month}/${year}`;
			return fechaMonth1;
		} else {
			fechaMonth2 = `${day}/${month}/${year}`;
			return fechaMonth2;
		}
	}

	const importExcel = (e) => {
		const file = e.target.files[0];
		//const fecha = "Fecha";
		const fechaAtencion = "FECHA DE ATENCION (dd/mm/yyyy)";
		const fechaNacimiento = "FECHA NACIMIENTO (dd/mm/aaaa)";

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
			const heads = headers.map(
				(head) =>
					head === fechaAtencion
						? {
								title: head,
								field: head,
								render: (row) => ExcelDateToJSDate(row[fechaAtencion] + 1),
						  }
						: head === fechaNacimiento
						? {
								title: head,
								field: head,
								render: (row) => ExcelDateToJSDate(row[fechaNacimiento] + 1),
						  }
						: { title: head, field: head }
				/*  
					 
						  head === fecha
						? {
								title: head,
								field: head,
								render: (row) => ExcelDateToJSDate(row[fecha] + 1),
						  }
						  */
			);

			setColDefs(heads);
			/* console.log(heads[1]["title"]); */

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

	return {
		importExcel,
		data,
		colDefs,
	};
};
