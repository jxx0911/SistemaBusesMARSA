import { useState } from "react";

export const useHoraEmbarque = () => {
	const [index, setIndex] = useState(0);

	const siguiente = () => {
		setIndex(index + 1);
	};

	const anterior = () => {
		setIndex(index - 1);
	};

	return {
		index,
		siguiente,
		anterior,
	};
};
