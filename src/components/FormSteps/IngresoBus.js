import React, { useState } from "react";
import $ from "jquery";
import { ImSearch } from "react-icons/im";
import { useBus } from "../../hooks/useBus";
import axios from "axios";

const initialBody = {
	placa: "",
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

	const importarBus = async (e) => {
		e.preventDefault();
		const resp = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/ticket/primeraVista",
			form
		);
		const { data } = resp;
		const { empresa, capacidad } = data[0];
		const { mensaje, aforo } = data[1];
		imprimirBusTicket = {
			...form,
			empresa: empresa,
			mensaje: mensaje,
			aforo: aforo,
			capacidad: (aforo * capacidad) / 100,
		};
		setForm(imprimirBusTicket);
		setImprimirBus(imprimirBusTicket);
	};

	return (
		<>
			<div className="container-tight py-2">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h2 className>SELECCION DE BUS</h2>
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
								<div className="tab-pane active show" id="tabs-home-ex5">
									<div>
										Placa : {form.placa ? form.placa : imprimirBus.placa}
										<br />
										Aforo :{" "}
										{form.aforo
											? `${form.aforo}%`
											: imprimirBus.aforo
											? `${imprimirBus.aforo}%`
											: ""}
										<br />
										Empresa :{" "}
										{form.empresa ? form.empresa : imprimirBus.empresa}
										<br />
										Capacidad(Aforo) :{" "}
										{form.capacidad ? form.capacidad : imprimirBus.capacidad}
									</div>
								</div>
								<div className="m-3 d-flex flex-row justify-content-between">
									<button
										className="btn btn-dark"
										onClick={() => navigation.previous()}
									>
										Atras
									</button>
									<button
										className="btn btn-primary"
										onClick={() => {
											navigation.next();
										}}
									>
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
