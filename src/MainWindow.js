import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tabla from "./Tabla";
import { BusAdd } from "./BusAdd";
import { MultiStepForm } from "./components/FormSteps/MultiStepForm";
import { Config } from "./components/Config";
import { useFormHook } from "./components/hooks/useFormHook";
import { useStepHook } from "./components/hooks/useStepHook";

function MainWindow() {
	const { formData, setForm } = useFormHook();
	const { navigation } = useStepHook();
	const props = { formData, setForm, navigation };

	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/tabla" exact>
						<Tabla />
					</Route>
					<Route path="/registro-buses" exact>
						<BusAdd />
					</Route>
					<Route path="/ticket" exact>
						<MultiStepForm />
					</Route>
					<Route path="/config" exact>
						<Config {...props} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default MainWindow;
