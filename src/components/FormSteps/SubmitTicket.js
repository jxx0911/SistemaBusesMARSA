import React from "react";
import { Inmune } from "./Inmune";
import { P2 } from "./P2";

export const SubmitTicket = ({ imprimirBus, imprimirPaciente, navigation }) => {
	console.log(imprimirPaciente);
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
							{imprimirPaciente.status === "INMUNE" ? (
								<Inmune paciente={imprimirPaciente} bus={imprimirBus} />
							) : (
								imprimirPaciente.status === "P2" && (
									<P2 paciente={imprimirPaciente} bus={imprimirBus} />
								)
							)}
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
