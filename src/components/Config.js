import React from "react";

export const Config = ({ formData, setForm, navigation }) => {
	const { busAforo, mensaje } = formData;

	return (
		<div className="container-tight py-4">
			<div className="card card-md">
				<div className="card-body text-center py-4 p-sm-5">
					<h1 className>CONFIGURACION</h1>
					<p className="text-muted">
						lorem ipsum dolor sit amet, consectetur adip
					</p>
				</div>
				<div className="card-body">
					<form>
						<fieldset className="form-fieldset">
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
							{/* falta añadir el script para el conteo de palabras del Text Area */}
							<div class="mb-3">
								<label class="form-label">Textarea</label>
								<textarea
									class="form-control"
									name="mensaje"
									placeholder={mensaje}
									value={mensaje}
									maxlength="100"
									disabled="true"
								></textarea>
								<div id="contador">0/50</div>
							</div>
							<div className="col-sm-12 mb-3 d-flex justify-content-between">
								<button className="btn btn-primary ">Editar</button>
								<button className="btn btn-success ">Guardar</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};
