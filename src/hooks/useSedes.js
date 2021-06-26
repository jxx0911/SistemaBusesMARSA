import { useEffect } from "react";
import { useState } from "react";

export const useSedes = () => {
	const [sedes, setSedes] = useState([]);

	useEffect(() => {
		getEmpresa();
	}, []);

	const getEmpresa = async () => {
		const resp = await fetch("http://167.99.115.105/baseDatos/sedes");
		const data = await resp.json();
		setSedes(data);
	};

	return {
		sedes,
	};
};
