import { useState, useEffect } from "react";

export const useEmpresaBus = () => {
	const [empresasBus, setEmpresasBus] = useState([]);

	console.log(empresasBus);
	useEffect(() => {
		getEmpresa();
	}, []);

	const getEmpresa = async () => {
		const resp = await fetch(
			"http://167.99.115.105/bdmarsa/tercera/mostrar/empresaBus"
		);
		const data = await resp.json();
		setEmpresasBus(data);
	};

	return {
		empresasBus,
	};
};
