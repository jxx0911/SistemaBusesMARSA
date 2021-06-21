import { useEffect, useState } from "react";

export const useConfig = () => {
	const [mensaje, setMensaje] = useState();
	const [aforo, setAforo] = useState();

	useEffect(() => {
		getMessage();
	}, []);

	const getMessage = async () => {
		const resp = await fetch("http://167.99.115.105/bd/configuracion/mostrar");
		const data = await resp.json();
		const [mensaje] = data;
		const m = mensaje.mensaje;
		const a = mensaje.aforo;
		setMensaje(m);
		setAforo(a);
	};

	return {
		mensaje,
		aforo,
	};
};
