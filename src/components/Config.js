import React, { useState } from "react";
import { useConfig } from "./hooks/useConfig";

export const Config = () => {
	const { mensaje, aforo } = useConfig();
	const [edit, setEdit] = useState(true);

	const handleEdit = (e) => {
		e.preventDefault();
		setEdit(!edit);
	};

	const handleChangeAforo = (e) => {
		console.log(e.target.value);
	};

	const handleChangeMensaje = (e) => {
		console.log(e.target);
	};

	return (
		<div className="container-tight py-4">
			<div className="card card-md">
				<div className="card-body text-center py-4 p-sm-5">
					<h1>CONFIGURACION</h1>
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
									name="aforo"
									placeholder={aforo}
									value={edit ? aforo : " "}
									disabled={edit}
									onChange={handleChangeAforo}
								/>
							</div>
							{/* falta añadir el script para el conteo de palabras del Text Area */}
							<div className="mb-3">
								<label className="form-label">Textarea</label>
								<textarea
									className="form-control"
									name="mensaje"
									placeholder={mensaje}
									value={mensaje}
									maxlength="100"
									disabled={edit}
									onChange={handleChangeMensaje}
								></textarea>
								<div id="contador">0/50</div>
							</div>
							<div className="col-sm-12 mb-3 d-flex justify-content-between">
								<button className="btn btn-primary " onClick={handleEdit}>
									Editar
								</button>
								<button className="btn btn-success ">Guardar</button>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
};
