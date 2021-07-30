import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ReactExport from "react-data-export";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export const ManifiestoIndividual = () => {
	const location = useLocation();
	const fecha_act = location.state?.fecha_act;
	const placa = location.state?.placa;
	const [row, setRow] = useState([]);

	useEffect(() => {
		axios
			.post("http://167.99.115.105/bdmarsa/tercera/manifiesto/mostrar", {
				fecha_act,
				placa,
			})
			.then((response) => {
				console.log(response);
				let data = response?.data;
				let dataTable = data?.filter(
					(element) => Object.keys(element).length !== 3
				);
				setRow(dataTable);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [fecha_act, placa]);

	const DataSet = [
		{
			columns: [
				{
					title: "",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 100 },
				},
				{
					title: "NOMBRE COMPLETO",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 130 },
				},
				{
					title: "",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 100 },
				},
				{
					title: "DNI",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 100 },
				},
				{
					title: "Nº CELULAR",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 90 },
				},
				{
					title: "DECLARACION JURADA",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 140 },
				},
				{
					title: "LUGAR DE PARTIDA",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 130 },
				},
				{
					title: "LUGAR DE DESTINO",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 160 },
				},
				{
					title: "LUGAR DE CUARENTENA",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 150 },
				},
				{
					title: "NOMBRE DEL HOTEL U \n OTRO LUGAR DE CUARENTENA",
					style: {
						font: { sz: "12", bold: true },
						alignment: { horizontal: "center" },
					},
					width: { wpx: 140 },
				},
				{
					title: "TIEMPO DE CUARENTENA",
					style: { font: { sz: "12", bold: true } },
					width: { wpx: 140 },
				},
			],
			data: row.map((data) => [
				{ value: data.ape_paterno, style: { font: { sz: "10" } } },
				{ value: data.ape_materno, style: { font: { sz: "10" } } },
				{ value: data.nombres, style: { font: { sz: "10" } } },
				{
					value: data.dni,
					style: { font: { sz: "10" }, alignment: { horizontal: "center" } },
				},
				{
					value: data.celular,
					style: { font: { sz: "10" }, alignment: { horizontal: "center" } },
				},
				{
					value: data.declaracion_jurada,
					style: { font: { sz: "10" }, alignment: { horizontal: "center" } },
				},
				{
					value: data.relevo,
					style: { font: { sz: "10" }, alignment: { horizontal: "center" } },
				},
				{ value: data.origen, style: { font: { sz: "10" } } },
				{ value: data.destino, style: { font: { sz: "10" } } },
				{ value: data.lugar_cuarentena, style: { font: { sz: "10" } } },
				{ value: data.nombre_hotel, style: { font: { sz: "10" } } },
				{ value: data.tiempo_cuarentena, style: { font: { sz: "10" } } },
			]),
		},
	];

	return (
		<>
			<div className="container">
				<table className="table">
					<thead>
						<tr>
							<th scope="col" className="align-middle"></th>
							<th scope="col" className="align-middle">
								NOMBRE COMPLETO
							</th>
							<th scope="col" className="align-middle"></th>
							<th scope="col" className="align-middle">
								DNI
							</th>
							<th scope="col" className="align-middle">
								Nº CELULAR
							</th>
							<th scope="col" className="align-middle">
								DECLARACION JURADA (SI O NO)
							</th>
							<th scope="col" className="align-middle">
								LUGAR DE PARTIDA
								(DEPARTAMENTO/PROVINCIA/DISTRITO/LOCALIDAD/DIRECCION)
							</th>
							<th scope="col" className="align-middle">
								LUGAR DE DESTINO
								(DEPARTAMENTO/PROVINCIA/DISTRITO/LOCALIDAD/DIRECCION)
							</th>
							<th scope="col" className="align-middle">
								LUGAR DE CUARENTENA
								(DEPARTAMENTO/PROVINCIA/DISTRITO/LOCALIDAD/DIRECCION)
							</th>
							<th scope="col" className="align-middle">
								NOMBRE DEL HOTEL U OTRO LUGAR DE CUARENTENA
							</th>
							<th scope="col" className="align-middle">
								TIEMPO DE CUARENTENA
							</th>
						</tr>
					</thead>
					<tbody>
						{row.map((item, index) => (
							<tr key={index}>
								<td className="align-middle">{item.ape_paterno}</td>
								<td className="align-middle">{item.ape_materno}</td>
								<td className="align-middle">{item.nombres}</td>
								<td className="align-middle">{item.dni}</td>
								<td className="align-middle">{item.celular}</td>
								<td className="align-middle">{item.declaracion_jurada}</td>
								<td className="align-middle">{item.relevo}</td>
								<td className="align-middle">{item.origen}</td>
								<td className="align-middle">{item.destino}</td>
								<td className="align-middle">{item.lugar_cuarentena}</td>
								<td className="align-middle">{item.nombre_hotel}</td>
								<td className="align-middle">{item.tiempo_cuarentena}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<ExcelFile
				filename="Manifiesto Data"
				element={
					<button type="button" className="btn btn-success float-end m-2">
						EXPORTAR
					</button>
				}
			>
				<ExcelSheet dataSet={DataSet} name="Manifiesto Data Report" />
			</ExcelFile>
		</>
	);
};
