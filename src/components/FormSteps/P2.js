import React from "react";

export const P2 = ({ paciente, bus }) => {
	return (
		<>
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
		</>
	);
};
