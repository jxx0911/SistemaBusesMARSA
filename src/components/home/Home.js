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
			/* let div = document.querySelector("#imprimible");
			imprimirAdmision(div); */
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
								fontFamily: "Sans-Serif",
							}}
						/>
						{/* caja */}
						<div className="position-absolute">
							{/* examen */}
							<div
								className="position-relative"
								style={{
									/* border: "1px solid black", */
									height: "24.5rem",
									top: "2.1rem",
									width: "53rem",
								}}
							>
								<div
									className="position-absolute"
									style={{
										fontWeight: "bold",
										right: "0rem",
										top: ".65rem",
										textDecoration: "underline",
										width: "27.2rem",
									}}
								>
									PRUEBA CUANTITATIVA ANTIGENOS
								</div>
								{/* examen */}
								<div
									className="position-relative"
									style={{
										width: "15rem",
										height: "1.7rem",
										top: "3.2rem",
										left: "7.5rem",
										fontSize: ".75rem",
										fontWeight: "bold",
										/* border: "1px solid black", */
									}}
								>
									PRUEBA CUANTITATIVA ANTIGENOS
								</div>
								{/* nombres */}
								<div
									className="position-relative"
									style={{
										/* border: "1px solid black", */
										height: "1.7rem",
										width: "17rem",
										top: "3.2rem",
										left: "12.3rem",
										fontSize: ".75rem",
										fontWeight: "bold",
									}}
								>
									CARLOS CRISTHIAN MOLINERO HUARCAYA
								</div>
								{/* empresa */}
								<div
									className="position-relative"
									style={{
										/* border: "1px solid black", */
										fontSize: ".75rem",
										fontWeight: "bold",
										height: "1.7rem",
										width: "17rem",
										top: "3rem",
										left: "8.5rem",
									}}
								>
									MINERA AURIFERA RETAMAS S.A.
								</div>
								{/* cargo */}
								<div
									className="position-relative"
									style={{
										/* border: "1px solid black", */
										fontSize: ".75rem",
										fontWeight: "bold",
										height: "1.7rem",
										width: "17rem",
										top: "2.6rem",
										left: "7.4rem",
									}}
								>
									PROBANDO
								</div>
								{/* fecha */}
								<div
									className="position-absolute"
									style={{
										/* border: "1px solid black", */
										fontSize: "1rem",
										fontWeight: "bold",
										height: "1.7rem",
										width: "27rem",
										right: "0rem",
										top: "3rem",
									}}
								>
									2021-07-24
								</div>
								{/* orden */}
								<div
									className="position-absolute"
									style={{
										/* border: "1px solid black", */
										fontSize: "1rem",
										fontWeight: "bold",
										height: "1.7rem",
										width: "9.3rem",
										right: "0rem",
										top: "3rem",
									}}
								>
									39588-T
								</div>
								{/* contrata */}
								<div
									className="position-absolute"
									style={{
										/* border: "1px solid black", */
										fontSize: ".6rem",
										fontWeight: "bold",
										height: "1.7rem",
										width: "14.3rem",
										right: "0rem",
										top: "5rem",
									}}
								>
									MINERA TAURO S.A.C.
								</div>
								{/* edad */}
								<div
									className="position-absolute"
									style={{
										/* border: "1px solid black", */
										fontSize: "1rem",
										fontWeight: "bold",
										height: "1.7rem",
										width: "19rem",
										right: "0rem",
										top: "6.1rem",
									}}
								>
									32
								</div>
								{/* dni */}
								<div
									className="position-absolute"
									style={{
										/* border: "1px solid black", */
										fontSize: "1rem",
										fontWeight: "bold",
										height: "1.7rem",
										width: "19.8rem",
										right: "0rem",
										top: "7.5rem",
									}}
								>
									46798727
								</div>
								{/* tipoooo */}
								<div
									className="position-absolute"
									style={{
										/* border: "1px solid black", */
										fontSize: "1rem",
										fontWeight: "bold",
										height: "1.7rem",
										width: "4.7rem",
										right: "0rem",
										top: "7.6rem",
									}}
								>
									Inmune
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
