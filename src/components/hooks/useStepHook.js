import { useStep } from "react-hooks-helper";

const steps = [{ id: "names" }, { id: "address" }, { id: "contact" }];

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
