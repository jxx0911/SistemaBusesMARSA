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
						<fieldset class="form-fieldset">
							<div class="mb-3">
								<div class="form-label">Empresa</div>
								<select class="form-select">
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div class="mb-3">
								<label class="form-label required">Placa</label>
								<input
									type="text"
									class="form-control"
									autocomplete="off"
									placeholder="Ingrese Placa"
								/>
							</div>
							<div class="mb-3">
								<label class="form-label required">Capacidad</label>
								<input
									type="number"
									class="form-control"
									autocomplete="off"
									placeholder="Ingrese capacidad"
								/>
							</div>
							<div class="col-6 col-sm-4  mb-3 float-end">
								<button href="#" class="btn btn-primary w-100">
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
