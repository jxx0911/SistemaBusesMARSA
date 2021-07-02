import { useState, useEffect } from "react";

export const useBus = () => {
	const [buses, setBuses] = useState([]);

	useEffect(() => {
		getBus();
	}, []);

	const getBus = async () => {
		const resp = await fetch(
			"http://167.99.115.105/bdmarsa/tercera/mostrar/bus"
		);
		const data = await resp.json();
		setBuses(data);
	};

	return { buses };
};
