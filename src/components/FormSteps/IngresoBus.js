import React from "react";

export const IngresoBus = ({ formData, setForm, navigation }) => {
	const { busPlaca, busAforo, busEmpresa, busCapacidad } = formData;

	return (
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
									className="form-control"
									autocomplete="off"
									placeholder="Ingrese Placa de Bus"
									style={{ textTransform: "uppercase" }}
									value={busPlaca}
									onChange={setForm}
									name="busPlaca"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Aforo</label>
								<input
									type="text"
									className="form-control"
									name="busAforo"
									placeholder={busAforo}
									value={busAforo}
									disabled="true"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Empresa</label>
								<input
									type="text"
									className="form-control"
									name="busEmpresa"
									placeholder={busEmpresa}
									value={busEmpresa}
									disabled="true"
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Capacidad</label>
								<input
									type="text"
									className="form-control"
									name="busCapacidad"
									placeholder={busCapacidad}
									value={busCapacidad}
									disabled="true"
								/>
							</div>
							<div className="col-6 col-sm-4  mb-3 float-end">
								<button
									className="btn btn-primary w-100"
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
	);
};
