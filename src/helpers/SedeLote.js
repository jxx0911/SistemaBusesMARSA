import { useState } from "react";
import { useSedes } from "../hooks/useSedes";

export const SedeLote = (form) => {
	const { sedes } = useSedes();
	let sedeLote = "";

	sedes.forEach((valor, index) => {
		if (valor.sede === form) sedeLote = valor.cod_sede;
	});

	return {
		sedeLote,
	};
};
