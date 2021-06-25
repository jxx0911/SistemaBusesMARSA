import { useEffect, useState } from "react";

export const useServicios = () => {
	const [servicios, setServicios] = useState([]);

	console.log(servicios);
	useEffect(() => {
		getEmpresa();
	}, []);

	const getEmpresa = async () => {
		const resp = await fetch(
			"http://167.99.115.105/bdmarsa/tercera/servicios/mostrar"
		);
		const data = await resp.json();
		setServicios(data);
	};

	return {
		servicios,
	};
};
