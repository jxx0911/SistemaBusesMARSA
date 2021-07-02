import React from "react";

export const Inmune = ({ paciente, bus }) => {
	function imprimirElemento(elemento) {
		let ventana = window.open("", "PRINT", "height=400,width=600");
		ventana.document.write("<html><head><title>" + document.title + "</title>");
		ventana.document.write('<link rel="stylesheet" href="style.css">');
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
		<div id="imprimible">
			<h3>TICKET : {paciente.status}</h3>
			<p>
				D.N.I. : {paciente.dni} <br />
				Resultado P1 : {paciente.resultado} <br />
				Sintomatologia : {paciente.sintomatologia} <br />
				Fecha de Prueba : {paciente.fecha_examen} <br />
				Clinica : {paciente.clinica} <br />
				<br />
				Bus : {bus.empresa} <br />
				Placa : {bus.placa} <br />
				Nº de Asiento : <br />
				Mensaje : {bus.mensaje}
			</p>
			<button onClick={imprimir} className="btn btn-success">
				Imprimir
			</button>
		</div>
	);
};
