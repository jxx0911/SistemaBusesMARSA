import React from "react";
import axios from "axios";

let form = {};
let time = new Date();

export const P2 = ({ paciente, bus }) => {
	function imprimirElemento(elemento) {
		let ventana = window.open("", "PRINT", "height=400,width=600");
		ventana.document.write("<html><><title>" + document.title + "</title>");
		ventana.document.write('<link rel="stylesheet" href="style.css">');
		ventana.document.write(
			"<style>*{margin: 0;padding: 0;border: 0;}@page{margin: 0;}body{ font-family: Lucida Sans Typewriter; }.size18{font-size: 18px;font-weight: bold;text-align:center;}.size14{font-size: 14px;text-align:center;}.size14izq{font-size: 14px;font-weight: bold;}.size14der{font-size: 14px;text-align:right;}.centrar{text-align:center;}</style>"
		);
		ventana.document.write("</head><body >");
		ventana.document.write(elemento.innerHTML);
		ventana.document.write("</body></html>");
		ventana.document.close();
		ventana.focus();
		ventana.onload = function () {
			ventana.print();
			ventana.close();
		};
		return true;
	}

	const registroManifiesto = async (e) => {
		e.preventDefault();
		form = {
			clave: paciente.clave,
			fecha_act: "2021-07-01",
			hora_act: time.toLocaleTimeString(),
			placa: bus.placa,
			capacidad_aforo: bus.capacidad,
		};
		console.log(form);
		const resp = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/ticket/ticketManifiesto",
			form
		);
		console.log(resp);
	};

	const imprimir = () => {
		let div = document.querySelector("#imprimible");
		imprimirElemento(div);
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
				<p className="size14izq">Dni:{paciente.dni}</p>
				<p className="size14izq">Resultado P1: {paciente.resultado}</p>
				<p className="size14izq">Fecha Prueba: {paciente.fecha_examen}</p>
				<p className="size14izq">Sintomatología: {paciente.sintomatologia}</p>
				<p className="size14izq">Clinica: {paciente.clinica}</p>
				<br />
				<p className="size14izq">Resultado P2: {paciente.resultado}</p>
				<p className="size14izq">Fecha Prueba: {paciente.fecha_examen2}</p>
				<p className="size14izq">Sintomatología: {paciente.sintomatologia2}</p>
				<p className="size14izq">Clinica: {paciente.clinica}</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
				<p className="size18 d-flex justify-content-center">INFORMACION BUS</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
				<p className="size14izq d-flex justify-content-center">
					PLACA: {bus.placa}
					<br />
					EMPRESA: {bus.empresa}
				</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
				<p className="centrar d-flex justify-content-center">{bus.mensaje}</p>
				<p className="centrar d-flex justify-content-center">
					--------------------------------------
				</p>
			</div>
			<button onClick={registroManifiesto} className="btn btn-primary">
				Registrar MANIFIESTO
			</button>
			<button onClick={imprimir} className="btn btn-success">
				Imprimir
			</button>
		</div>
	);
};
