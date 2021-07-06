import { useStep } from "react-hooks-helper";

const steps = [{ id: "bus" }, { id: "paciente" }, { id: "submit" }];

export const useStepHook = () => {
	const { step, navigation } = useStep({
		steps,
		initialStep: 0,
	});

	return {
		step,
		navigation,
	};
};
