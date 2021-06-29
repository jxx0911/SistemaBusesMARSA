import { useState } from "react";
import { useSedes } from "../hooks/useSedes";

export const SedeLote = ({ form }) => {
	const { sedes } = useSedes();
	const [sedeLote, setSedeLote] = useState();

	sedes.forEach((valor, index) => {
		if (sedes[index].sede === form.nombre_sede) setSedeLote(sedes[index]);
	});

	return {
		sedeLote,
	};
};
