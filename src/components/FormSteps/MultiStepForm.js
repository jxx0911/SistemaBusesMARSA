import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./Names";
import { Address } from "./Address";
import { Contact } from "./Contact";
import { Review } from "./Review";
import { Submit } from "./Submit";

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
	{ id: "review" },
	{ id: "submit" },
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
			return <Names {...props} />;
		case "address":
			return <Address {...props} />;
		case "contact":
			return <Contact />;
		case "review":
			return <Review />;
		case "submit":
			return <Submit />;
	}

	return <div></div>;
};
