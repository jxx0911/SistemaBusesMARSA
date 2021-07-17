import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { GrAdd, GrFormSubtract } from "react-icons/gr";
import { useBus } from "../../hooks/useBus";
/* import { Fecha } from "../../helpers/Fecha"; */
import { HoraEmbarque } from "./HoraEmbarque";
import { useHoraEmbarque } from "../../hooks/useHoraEmbarque";
import axios from "axios";

/* const initialBody = {
	placa: "",
	asiento: "",
	hora: HoraEmbarque[0],
}; */

let imprimirBusTicket = {};

export const IngresoBus = ({ imprimirBus, setImprimirBus, navigation }) => {
	const { index, siguiente, anterior } = useHoraEmbarque();

	const [form, setForm] = useState({
		placa: "",
		asiento: "",
		hora: "",
	});
	const { buses } = useBus();

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const estadoAsiento = async (e) => {
		e.preventDefault();

		let body = {
			/* fecha_act: Fecha().fechaHoy, */
			fecha_act: "2021-07-14",
			placa: form.placa,
		};

		if (body.placa === "") {
			navigation.next();
		} else {
			const resp = await axios.post(
				"http://167.99.115.105/bdmarsa/tercera/mostrar/listadoAsientos",
				body
			);

			console.log(resp);
			const { data } = resp;

			if (data[parseInt(form.asiento) - 1].estado === false) {
				imprimirBusTicket = {
					...imprimirBusTicket,
					asiento: form.asiento,
					hora: HoraEmbarque[index],
				};
				setForm(imprimirBusTicket);
				setImprimirBus(imprimirBusTicket);
				navigation.next();
			} else {
				alert("ASIENTO NO DISPONIBLE");
			}
		}
	};

	console.log(form);

	const importarBus = async (e) => {
		e.preventDefault();

		const resp = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/ticket/primeraVista",
			form
		);

		const { data } = resp;

		if (data[0] === null) {
			imprimirBusTicket = {
				...imprimirBusTicket,
			};
			setForm(imprimirBusTicket);
			setImprimirBus(imprimirBusTicket);
		} else {
			const { empresa, capacidad, chofer } = data[0];
			const { mensaje, aforo } = data[1];
			imprimirBusTicket = {
				...form,
				empresa: empresa,
				mensaje: mensaje,
				aforo: aforo,
				chofer: chofer,
				/* chofer2: chofer2, */
				capacidad: (aforo * capacidad) / 100,
			};
			setForm(imprimirBusTicket);
			setImprimirBus(imprimirBusTicket);
		}
	};

	return (
		<>
			<div className="container-tight py-2">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h2>SELECCION DE BUS</h2>
					</div>
					<div className="card-body">
						<form>
							<fieldset className="form-fieldset">
								<div className="m-3 d-flex flex-row">
									<input
										type="text"
										className="form-control inputBus"
										placeholder="Ingrese Nº de Bus"
										value={form.placa}
										onChange={handleInputChange}
										name="placa"
										list="placas"
									/>
									<datalist id="placas">
										{buses.map((valor, index) => (
											<option key={index} value={valor.placa}></option>
										))}
									</datalist>
									<button className="btn btn-dark m-2" onClick={importarBus}>
										<ImSearch />
									</button>
								</div>
								<div className="m-3 d-flex flex-row">
									<input
										type="number"
										className="form-control"
										placeholder="Ingrese Nº de Asiento"
										value={form.asiento}
										onChange={handleInputChange}
										name="asiento"
									/>
								</div>
								<div className="m-3 d-flex flex-row">
									<input
										type="text"
										className="form-control"
										value={HoraEmbarque[index]}
										onChange={handleInputChange}
										readOnly
										/* name="asiento" */
									/>
									<button
										type="button"
										onClick={anterior}
										className="btn btn-outline-danger m-1"
									>
										<GrFormSubtract />
									</button>
									<button
										type="button"
										onClick={siguiente}
										className="btn btn-outline-primary m-1"
									>
										<GrAdd />
									</button>
								</div>

								<div>
									<div>
										<div className="d-flex">
											Bus : &nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.placa ? form.placa : imprimirBus.placa}
											</p>
										</div>
										<div className="d-flex">
											Aforo :&nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.aforo
													? `${form.aforo}%`
													: imprimirBus.aforo
													? `${imprimirBus.aforo}%`
													: ""}
											</p>
										</div>
										<div className="d-flex">
											Empresa :&nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.empresa ? form.empresa : imprimirBus.empresa}
											</p>
										</div>

										{/* <div className="d-flex">
											Conductor :&nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.chofer ? form.chofer : imprimirBus.chofer}
											</p>
										</div> */}
										{/* <div className="d-flex">
											Conductor 2:&nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.chofer2 ? form.chofer2 : imprimirBus.chofer2}
											</p>
										</div> */}
										<div className="d-flex">
											Capacidad(Aforo) :&nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.capacidad
													? form.capacidad
													: imprimirBus.capacidad}
											</p>
										</div>
										<div className="d-flex">
											Hora :&nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.hora
													? `${form.hora}%`
													: imprimirBus.hora
													? `${imprimirBus.hora}%`
													: ""}
											</p>
										</div>
									</div>
								</div>

								<div className="m-3 d-flex justify-content-between">
									<button
										className="btn btn-dark"
										onClick={() => navigation.previous()}
									>
										Atras
									</button>
									<button className="btn btn-primary" onClick={estadoAsiento}>
										Siguiente
									</button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
