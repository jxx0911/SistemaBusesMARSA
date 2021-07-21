export const HeadersData = () => {
	const headers = [
		"nro",
		"sede",
		"clinica",
		"codigo",
		"fecha_salida",
		"tipoDocumento",
		"nroDocumento",
		"apePaterno",
		"apeMaterno",
		"nombres",
		"resultp1",
		"resultp2",
		"asistencia",
		"apenombres",
		"sexo",
		"f_nac",
		"celular",
		"correo",
		"compania",
		"unidad",
		"empresaContratista",
		"rucContratista",
		"zonaTrabajo",
		"areaTrabajo",
		"puesto",
		"ubicacion",
		"direccion",
		"distrito",
		"provincia",
		"departamento",
		"edad",
		"destino",
		"lugarEmbarque",
		"status",
	];

	const heads = headers.map((head) => ({ title: head, field: head }));

	return {
		heads,
	};
};
