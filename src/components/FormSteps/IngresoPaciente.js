import React from "react";
import $ from "jquery";
import Navbar from "../Navbar";

export const IngresoPaciente = ({ formData, setForm, navigation }) => {
	const { dni, apellidos, nombres } = formData;

	$(document).ready(function () {
		$("form").keypress(function (e) {
			if (e.which === 13) {
				return false;
			}
		});
	});

	return (
		<>
			<Navbar />
			<div className="container-tight py-2">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h1 className>DATOS DE PACIENTE</h1>
						<p className="text-muted">
							lorem ipsum dolor sit amet, consectetur adip
						</p>
					</div>
					<div className="card-body">
						<form>
							<fieldset className="form-fieldset">
								<div className="mb-3">
									<label className="form-label required">D.N.I.</label>
									<input
										type="number"
										className="form-control"
										autocomplete="off"
										placeholder="Ingrese D.N.I."
										style={{ textTransform: "uppercase" }}
										value={dni}
										onChange={setForm}
										name="dni"
										autoFocus
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Apellidos</label>
									<input
										type="text"
										className="form-control"
										name="apellidos"
										placeholder={apellidos}
										value={apellidos}
										disabled="true"
									/>
								</div>
								<div className="mb-3">
									<label className="form-label">Nombres</label>
									<input
										type="text"
										className="form-control"
										name="nombres"
										placeholder={nombres}
										value={nombres}
										disabled="true"
									/>
								</div>
								<div className="col-sm-12 mb-3 d-flex justify-content-between">
									<button
										className="btn btn-dark"
										onClick={() => navigation.previous()}
									>
										Atras
									</button>
									<button
										className="btn btn-primary"
										onClick={() => navigation.next()}
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
