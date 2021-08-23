import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

export const useSedes = () => {
	const [sedes, setSedes] = useState([]);

	useEffect(() => {
		getEmpresa();
	}, []);

	const getEmpresa = async () => {
		const resp = await axios.get("http://167.99.115.105/baseDatos/sedes");
		const { data } = resp;

		setSedes(data);
		console.log(data);
	};

	return {
		sedes,
	};
};
