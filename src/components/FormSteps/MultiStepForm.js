import React, { useState } from "react";
import { IngresoBus } from "./IngresoBus";
import { IngresoPaciente } from "./IngresoPaciente";
import { SubmitTicket } from "./SubmitTicket";
import { useStepHook } from "../../hooks/useStepHook";

export const MultiStepForm = () => {
	const { step, navigation } = useStepHook();
	const [imprimirBus, setImprimirBus] = useState({});
	const [imprimirPaciente, setImprimirPaciente] = useState({});
	/* 	const [statusBeta, setStatusBeta] = useState(2); */
	const props = {
		imprimirBus,
		setImprimirBus,
		imprimirPaciente,
		setImprimirPaciente,
		navigation,
	};

	// eslint-disable-next-line default-case
	switch (step.id) {
		case "bus":
			return <IngresoPaciente {...props} />;
		case "paciente":
			return <IngresoBus {...props} />;
		case "submit":
			return <SubmitTicket {...props} />;
	}

	return <div></div>;
};
