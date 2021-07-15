import React from "react";
import axios from "axios";
import imprimirElemento from "../../helpers/imprimirElemento";
import { Fecha } from "../../helpers/Fecha";

let form = {};
let time = new Date();

export const Inmune = ({ paciente, setPaciente, bus, setBus, navigation }) => {
	const imprimir = async (e) => {
		e.preventDefault();
		form = {
			clave: paciente.clave,
			/* fecha_actual: Fecha().fechaHoy, */
			fecha_actual: "2021-07-14",
			hora_act: time.toLocaleTimeString(),
			placa: bus.placa,
			capacidad_aforo: bus.capacidad,
			asiento: bus.asiento,
		};
		console.log(form);
		const resp = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/ticket/ticketManifiesto",
			form
		);
		console.log(resp);
		let div = document.querySelector("#imprimible");
		imprimirElemento(div);
		setBus({});
		setPaciente({});
		navigation.go(0);
	};

	return (
		<div>
			<div id="imprimible">
				<p className="size18 d-flex justify-content-center">
					CONTROL DE SALIDA
				</p>
				<p className="size14 d-flex justify-content-center">
					Minera Aurífera Retamas S.A.
				</p>
				<p className="size14 d-flex justify-content-center">20132367800</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
				<p className="size18 d-flex justify-content-center">
					{paciente.status}
				</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
				<p className="size14izq">DNI: {paciente.dni}</p>
				<p className="size14izq">Resultado P1: {paciente.resultado}</p>
				<p className="size14izq">Fecha Prueba: {paciente.fecha_examen}</p>
				<p className="size14izq">Sintomatología: {paciente.sintomatologia}</p>
				<p className="size14izq">Clinica: {paciente.clinica}</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
				<p className="size18 d-flex justify-content-center">INFORMACION BUS</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
				<p className="size14izq">
					Nº Asiento: {bus.asiento}
					<br />
					Bus: {bus.placa}
					<br />
					Empresa: {bus.empresa}
					{/* <br />
					Conductor 1: {bus.chofer} */}
					{/* <br />
					Conductor 2: {bus.chofer2} */}
				</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
				<p className="centrar d-flex justify-content-center">{bus.mensaje}</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
			</div>
			<div className="d-flex justify-content-center mb-1">
				<button onClick={imprimir} className="btn btn-success ">
					Imprimir
				</button>
			</div>
		</div>
	);
};
