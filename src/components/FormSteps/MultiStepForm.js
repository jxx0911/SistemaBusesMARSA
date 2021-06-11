import React from "react";
import { IngresoBus } from "./IngresoBus";
import { IngresoPaciente } from "./IngresoPaciente";
import { SubmitTicket } from "./SubmitTicket";
import { useFormHook } from "../hooks/useFormHook";
import { useStepHook } from "../hooks/useStepHook";

export const MultiStepForm = () => {
	const { formData, setForm } = useFormHook();
	const { step, navigation } = useStepHook();

	const props = { formData, setForm, navigation };

	// eslint-disable-next-line default-case
	switch (step.id) {
		case "names":
			return <IngresoBus {...props} />;
		case "address":
			return <IngresoPaciente {...props} />;
		case "contact":
			return <SubmitTicket {...props} />;
	}

	return <div></div>;
};
