import { useState } from "react";
import { useServicios } from "../hooks/useServicios";

export const ServicioLote = (form) => {
	const { servicios } = useServicios();
	const [servicioLote, setServicioLote] = useState();

	servicios.forEach((valor, index) => {
		if (valor.id_servicio === form) setServicioLote(valor.nombre_servicio);
	});

	return {
		servicioLote,
	};
};
