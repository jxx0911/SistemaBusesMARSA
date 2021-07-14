import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { Fecha } from "../../helpers/Fecha";
import axios from "axios";

const initialBody = {
	fecha_act: Fecha().fechaHoy,
	nro_documento: "",
};

export const Home = () => {
	const [form, setForm] = useState(initialBody);

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleKeyPress = async (e) => {
		if (e.key === "Enter") {
			const resp = await axios.post(
				"http://167.99.115.105/bdmarsa/tercera/registroAuto/HistoriaC",
				form
			);
			const { data } = resp;
			alert(data.Respuesta);
			setForm(initialBody);
		}
	};

	return (
		<>
			<div className="container-tight py-2">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h2>REGISTRO DE PACIENTE</h2>
					</div>
					<div className="card-body">
						<fieldset className="form-fieldset">
							<div className="mb-3">
								<div className="d-flex flex-row">
									<input
										type="number"
										className="form-control"
										placeholder="Ingrese D.N.I."
										value={form.nro_documento}
										onChange={handleInputChange}
										name="nro_documento"
										onKeyPress={handleKeyPress}
									/>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
		</>
	);
};
