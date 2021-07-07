import React from "react";
import { ImSearch } from "react-icons/im";

export const Home = () => {
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
										/* value={form.nro_documento}
										onChange={handleInputChange} */
										name="nro_documento"
										/* onKeyPress={handleKeyPress} */
									/>
									<button
										className="btn btn-dark m-2"
										/* onClick={importarPaciente} */
									>
										<ImSearch />
									</button>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
		</>
	);
};
