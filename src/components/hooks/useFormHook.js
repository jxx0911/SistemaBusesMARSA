import { useForm } from "react-hooks-helper";

const defaultData = {
	busPlaca: "",
	busEmpresa: "",
	busCapacidad: "",
	dni: "",
	apellidos: "",
	nombres: "",
};

export const useFormHook = () => {
	const [formData, setForm] = useForm(defaultData);
	return {
		formData,
		setForm,
	};
};
