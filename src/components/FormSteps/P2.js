import React from "react";

export const P2 = ({ paciente, bus }) => {
	function imprimirElemento(elemento) {
		let ventana = window.open("", "PRINT", "height=400,width=600");
		ventana.document.write("<html><><title>" + document.title + "</title>");
		ventana.document.write('<link rel="stylesheet" href="style.css">');
		ventana.document.write(
			"<style>@page{margin: 0;}body{ font-family: Lucida Sans Typewriter; }.size18{font-size: 18px;font-weight: bold;text-align:center;}.size14{font-size: 14px;text-align:center;}.size14izq{font-size: 14px;font-weight: bold;}.size14der{font-size: 14px;text-align:right;}.centrar{text-align:center;}</style>"
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

	const imprimir = () => {
		let div = document.querySelector("#imprimible");
		imprimirElemento(div);
	};

	return (
		<div>
			{/* <div id="imprimible">
				<h3>TICKET : {paciente.status}</h3>
				<p>
					D.N.I. : {paciente.dni} <br />
					Resultado P1 : {paciente.resultado} <br />
					Sintomatologia : {paciente.sintomatologia} <br />
					Fecha de Prueba : {paciente.fecha_examen} <br />
					Clinica : {paciente.clinica} <br />
					<br />
					Resultado P2 : {paciente.resultado2} <br />
					Sintomatologia : {paciente.sintomatologia2} <br />
					Fecha de Prueba : {paciente.fecha_examen2} <br />
					Clinica : {paciente.clinica} <br />
					<br />
					Bus : {bus.empresa} <br />
					Placa : {bus.placa} <br />
					Nº de Asiento : <br />
					Mensaje : {bus.mensaje}
				</p>
			</div> */}
			<div id="imprimible">
				<p className="size18">CONTROL DE SALIDA</p>
				<p className="size14">Minera Aurífera Retamas S.A.</p>
				<p className="size14">20132367800</p>
				<br />
				<p className="centrar">--------------------------------------</p>
				<p className="size18">{paciente.status}</p>
				<p className="centrar">--------------------------------------</p>
				<br />
				<p className="size14izq">
					Dni:<span>{paciente.dni}</span>
				</p>
				<p className="size14izq">Resultado P1: {paciente.resultado}</p>
				<p className="size14izq">Fecha Prueba: {paciente.fecha_examen}</p>
				<p className="size14izq">Sintomatología: {paciente.sintomatologia}</p>
				<p className="size14izq">Clinica: {paciente.clinica}</p>
				<br />
				<br />
				<p className="size14izq">Resultado P2: {paciente.resultado}</p>
				<p className="size14izq">Fecha Prueba: {paciente.fecha_examen2}</p>
				<p className="size14izq">Sintomatología: {paciente.sintomatologia2}</p>
				<p className="size14izq">Clinica: {paciente.clinica}</p>
				<p className="centrar">--------------------------------------</p>
				<p className="size18">INFORMACION BUS</p>
				<p className="centrar">--------------------------------------</p>
				<br />
				<p className="size14izq">
					PLACA:<span>{bus.placa}</span>
					<br />
					EMPRESA:<span>{bus.empresa}</span>
				</p>
				<br />
				<br />
				<p className="centrar">--------------------------------------</p>
				<p className="centrar">{bus.mensaje}</p>
				<p className="centrar">--------------------------------------</p>
				<br />
			</div>
			<button onClick={imprimir} className="btn btn-success">
				Imprimir
			</button>
		</div>
	);
};
