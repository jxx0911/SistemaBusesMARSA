import React, { useState } from "react";
/* import { Fecha } from "../../helpers/Fecha";
 */ import axios from "axios";
import imprimirAdmision from "../../helpers/imprimirAdmision";
import admision from "../../assets/admision.jpg";

const initialBody = {
	/* fecha_act: Fecha().fechaHoy, */
	fecha_act: "2021-07-21",
	nro_documento: "",
};

export const Home = () => {
	const [form, setForm] = useState(initialBody);

	const [keyPress, setKeyPress] = useState(true);
	const [imprimir, setImprimir] = useState(false);

	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleKeyPress = async (e) => {
		if (e.key === "Enter") {
			console.log("Enter");
			setKeyPress(!keyPress);
			const resp = await axios.post(
				"http://167.99.115.105/bdmarsa/tercera/registroAuto/HistoriaC",
				form
			);
			const { data } = resp;

			console.log(data);
			if (data.length === 1) alert(data[0].Respuesta);
			if (data.length === 2) alert(data[0].Respuesta);

			setForm(initialBody);
			setImprimir(!imprimir);
			let div = document.querySelector("#imprimible");
			imprimirAdmision(div);
			/* setKeyPress(true); */
		}
	};

	return (
		<>
			{!imprimir ? (
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
											disabled={keyPress ? false : true}
										/>
									</div>
								</div>
							</fieldset>
						</div>
					</div>
				</div>
			) : (
				<div id="imprimible">
					<div className="d-flex justify-content-center position-relative">
						<img
							src={admision}
							alt="admision"
							style={{
								width: "800px",
								height: "1200px",
							}}
						/>
						<div className="position-absolute">
							PRUEBA CUANTITATIVA ANTIGENOS
						</div>
					</div>
				</div>
			)}
		</>
	);
};
