import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { IngresoBus } from "./IngresoBus";
import { IngresoPaciente } from "./IngresoPaciente";
import { SubmitTicket } from "./SubmitTicket";

const defaultData = {
	busPlaca: "",
	busAforo: "",
	busEmpresa: "",
	busCapacidad: "",
	dni: "",
	apellidos: "",
	nombres: "",
};

const steps = [
	{ id: "names" },
	{ id: "address" },
	{ id: "contact" },
];

export const MultiStepForm = () => {
	const [formData, setForm] = useForm(defaultData);
	const { step, navigation } = useStep({
		steps,
		initialStep: 0,
	});

	const props = { formData, setForm, navigation };

	// eslint-disable-next-line default-case
	switch (step.id) {
		case "names":
			return <IngresoBus {...props} />;
		case "address":
			return <IngresoPaciente {...props} />;
		case "contact":
			return <SubmitTicket {...props}  />;
	}

	return <div></div>;
};
