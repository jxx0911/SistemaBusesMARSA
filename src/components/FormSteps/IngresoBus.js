import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { useBus } from "../../hooks/useBus";
import axios from "axios";

const initialBody = {
	placa: "",
	asiento: "",
};

let imprimirBusTicket = {};

export const IngresoBus = ({ imprimirBus, setImprimirBus, navigation }) => {
	const [form, setForm] = useState(initialBody);
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
			fecha_act: "2021-07-07",
			placa: form.placa,
		};
		if (body.placa === "") {
			navigation.next();
		} else {
			const resp = await axios.post(
				"http://167.99.115.105/bdmarsa/tercera/mostrar/listadoAsientos",
				body
			);
			const { data } = resp;
			data.forEach((element) => {
				if (parseInt(form.asiento) === element.nro_asiento) {
					if (element.estado === false) {
						imprimirBusTicket = {
							...imprimirBusTicket,
							asiento: form.asiento,
						};
						setForm(imprimirBusTicket);
						setImprimirBus(imprimirBusTicket);
						navigation.next();
					} else {
						alert("ASIENTO NO DISPONIBLE");
					}
				}
			});
		}
	};

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
								<div className="mb-3 d-flex flex-row">
									<input
										type="text"
										className="form-control inputBus"
										placeholder="Ingrese Placa de Bus"
										style={{ textTransform: "uppercase" }}
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

								<div>
									<div>
										<div className="d-flex">
											Placa : &nbsp;
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
										<div className="d-flex">
											Conductor :&nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.chofer ? form.chofer : imprimirBus.chofer}
											</p>
										</div>
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
											N° Asiento:&nbsp;
											<p style={{ color: "red", fontWeight: "bold" }}>
												{form.asiento ? form.asiento : imprimirBus.asiento}
											</p>
										</div>
									</div>
								</div>
								<div className="mt-3 d-flex flex-row">
									<input
										type="number"
										className="form-control"
										placeholder="Ingrese Nº de Asiento"
										value={form.asiento}
										onChange={handleInputChange}
										name="asiento"
									/>
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
