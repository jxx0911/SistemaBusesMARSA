import { useState } from "react";

export const useNombreEmpresa = () => {
	const [empresaEdit, setEmpresaEdit] = useState({
		ruc: "",
		nombre_empresa: "",
	});

	console.log(empresaEdit);

	return {
		empresaEdit,
		setEmpresaEdit,
	};
};
