import { useState } from "react";

export const useNombreEmpresa = () => {
	const [empresaEdit, setEmpresaEdit] = useState({
		ruc: "",
		nombre_empresa: "",
	});

	return {
		empresaEdit,
		setEmpresaEdit,
	};
};
