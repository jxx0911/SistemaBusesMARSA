import { useState, useEffect } from "react";

export const useLoteEditable = () => {
	const [lote, setLote] = useState([]);

	useEffect(() => {
		getLote();
	}, []);

	const getLote = async () => {
		const resp = await fetch(
			"http://167.99.115.105/bdmarsa/tercera/mostrar/loteEditable"
		);
		const data = await resp.json();
		setLote(data);
	};

	return { lote };
};
