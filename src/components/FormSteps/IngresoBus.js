import React, { useState } from "react";
import $ from "jquery";
import { ImSearch } from "react-icons/im";
import axios from "axios";

const initialBody = {
	placa: "",
};

let imprimirBusTicket = {};

export const IngresoBus = ({ imprimirBus, setImprimirBus, navigation }) => {
	const [form, setForm] = useState(initialBody);
	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	$(document).ready(function () {
		$("form").keypress(function (e) {
			if (e.which === 13) {
				return false;
			}
		});
	});

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
						<h1 className>SELECCION DE BUS</h1>
						<p className="text-muted">
							lorem ipsum dolor sit amet, consectetur adip
						</p>
					</div>
					<div className="card-body">
						<form>
							<fieldset className="form-fieldset">
								<div className="mb-3">
									<label className="form-label required">Bus</label>
									<input
										type="text"
										className="form-control inputBus"
										placeholder="Ingrese Placa de Bus"
										style={{ textTransform: "uppercase" }}
										value={form.placa}
										onChange={handleInputChange}
										name="placa"
										autoFocus
									/>
									<button className="btn btn-dark" onClick={importarBus}>
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
								<div className="col-6 col-sm-4  mb-3 float-end">
									<button
										className="btn btn-primary w-100"
										onClick={() => {
											navigation.next();
										}}
									>
										Siguiente
									</button>
									{/* <button href="#" class="btn btn-primary disabled w-100">
									Primary
								</button> */}
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};
