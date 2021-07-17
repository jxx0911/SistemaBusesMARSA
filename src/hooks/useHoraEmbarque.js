import { useState } from "react";

export const useHoraEmbarque = () => {
	const [index, setIndex] = useState(0);

	const siguiente = () => {
		if (index < 8) setIndex(index + 1);
		else setIndex(0);
	};

	const anterior = () => {
		if (index > 0) setIndex(index - 1);
		else setIndex(8);
	};

	return {
		index,
		siguiente,
		anterior,
	};
};
