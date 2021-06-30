import { useState } from "react";

export const SedeLote = async (form) => {

	const [sedeLote, setSedeLote] = useState();

	/* const resp = await fetch("http://167.99.115.105/baseDatos/sedes");
	const data = await resp.json(); */

	fetch('http://167.99.115.105/baseDatos/sedes')
            .then(response => response.json())
            .then(data => {
				data.forEach((valor) => {
					if (valor.sede === form) setSedeLote(valor.cod_sede);
					
				});
			});  

			return(sedeLote);
	

};
