import { useState } from "react";

export const useImprimir = () => {
	const [imprimirBus, setImprimirBus] = useState({});

	const [imprimirPaciente, setImprimirPaciente] = useState({});

	return {
		imprimirBus,
		setImprimirBus,
		imprimirPaciente,
		setImprimirPaciente,
	};
};
