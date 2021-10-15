export const Fecha = () => {
	let fechaHoy = "";
	let day = new Date();
	let año = day.getFullYear();
	let mes = day.getMonth() + 1;
	let dia = day.getDate();

	if (mes < 10 && dia < 10) {
		fechaHoy = `${año}-0${mes}-0${dia}`;
	} else if (mes < 10) {
		fechaHoy = `${año}-0${mes}-${dia}`;
		console.log("fecha Hoy aqui: " + fechaHoy);
	} else if (dia < 10) {
		fechaHoy = `${año}-${mes}-0${dia}`;
		console.log("fecha Hoy aqui: " + fechaHoy);
	} else {
		fechaHoy = `${año}-${mes}-${dia}`;
	}

	return {
		fechaHoy,
	};
};
