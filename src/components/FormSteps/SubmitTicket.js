import React from "react";
import { Ticket } from "./Ticket";

export const SubmitTicket = ({
	imprimirBus,
	imprimirPaciente,
	setImprimirBus,
	setImprimirPaciente,
	navigation,
}) => {
	return (
		<>
			<div className="container-tight py-2">
				<div className="card card-md">
					<div className="card-body text-center py-4 p-sm-5">
						<h2>IMPRIMIR TICKET</h2>
					</div>
					<div className="card-body">
						<div className="card">
							<Ticket
								paciente={imprimirPaciente}
								setPaciente={setImprimirPaciente}
								bus={imprimirBus}
								setBus={setImprimirBus}
								navigation={navigation}
							/>
						</div>

						<div className="mt-3 d-flex justify-content-between">
							<button
								className="btn btn-dark"
								onClick={() => {
									navigation.previous();
								}}
							>
								Atras
							</button>
							<button
								className="btn btn-danger"
								onClick={() => {
									setImprimirBus({});
									setImprimirPaciente({});
									navigation.go(0);
								}}
							>
								RESET
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
