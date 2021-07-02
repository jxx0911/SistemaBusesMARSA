import React from "react";

export const SubmitTicket = ({ navigation }) => {
	return (
		<>
			<div className="container-tight py-2">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h1 className>SELECCION DE BUS</h1>
						<p className="text-muted">
							lorem ipsum dolor sit amet, consectetur adip
						</p>
					</div>
					<div className="card-body">
						<div className="card">
							<ul className="nav nav-tabs nav-fill" data-bs-toggle="tabs">
								<li className="nav-item">
									<button
										href="#tabs-home-ex5"
										className="nav-link active"
										data-bs-toggle="tab"
									>
										Bus
									</button>
								</li>
								<li className="nav-item">
									<button
										href="#tabs-profile-ex5"
										className="nav-link"
										data-bs-toggle="tab"
									>
										Paciente
									</button>
								</li>
							</ul>
						</div>

						<div className="col-sm-12 mb-3 mt-3 d-flex justify-content-between">
							<button
								className="btn btn-dark"
								onClick={() => navigation.previous()}
							>
								Atras
							</button>
							{/* <button
							className="btn btn-primary"
							onClick={() => navigation.next()}
						>
							Siguiente
						</button> */}
							<button className="btn btn-success">Imprimir</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
