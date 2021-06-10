import React from "react";

export const BusAdd = () => {
	return (
		<div className="container-tight py-4">
			<div className="card card-md">
				<div className="card-body text-center py-4 p-sm-5">
					<h1 className>REGISTRO DE BUSES</h1>
					<p className="text-muted">
						lorem ipsum dolor sit amet, consectetur adip
					</p>
				</div>
				<div className="card-body">
					<form>
						<fieldset className="form-fieldset">
							<div className="mb-3">
								<label className="form-label required">Empresa</label>
								<input
									type="text"
									className="form-control"
									autocomplete="off"
									placeholder="Ingrese Empresa"
									style={{ textTransform: "uppercase" }}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label required">Placa</label>
								<input
									type="text"
									className="form-control"
									autocomplete="off"
									placeholder="Ingrese Placa"
									style={{ textTransform: "uppercase" }}
								/>
							</div>
							<div className="mb-3">
								<label className="form-label required">Capacidad</label>
								<input
									type="number"
									className="form-control"
									autocomplete="off"
									placeholder="Ingrese capacidad"
								/>
							</div>
							<div className="col-6 col-sm-4  mb-3 float-end">
								<button href="#" className="btn btn-primary w-100">
									Registrar
								</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};
