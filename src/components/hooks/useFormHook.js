import { useForm } from "react-hooks-helper";

const defaultData = {
	busPlaca: "",
	busAforo: "500",
	busEmpresa: "",
	busCapacidad: "",
	dni: "",
	apellidos: "",
	nombres: "",
	mensaje: "Hola este es un mensaje de prueba",
};

export const useFormHook = () => {
	const [formData, setForm] = useForm(defaultData);

	return {
		formData,
		setForm,
	};
};
