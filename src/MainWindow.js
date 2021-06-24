import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tabla from "./Tabla";
import Login from "./Login";
import { Historial } from "./components/Historial";
import { BusAdd } from "./BusAdd";
import { MultiStepForm } from "./components/FormSteps/MultiStepForm";
import { Config } from "./components/Config";
import { useFormHook } from "./components/hooks/useFormHook";
import { useStepHook } from "./components/hooks/useStepHook";
import HistorialEditar from "./components/HistorialEditar";

function MainWindow() {
	const { formData, setForm } = useFormHook();
	const { navigation } = useStepHook();
	const props = { formData, setForm, navigation };

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/home" exact>
						<Home />
					</Route>
					<Route path="/tabla" exact>
						<Tabla />
					</Route>
					<Route path="/historial" exact>
						<Historial />
					</Route>
					<Route path="/registro-buses" exact>
						<BusAdd />
					</Route>
					<Route path="/ticket" exact>
						<MultiStepForm />
					</Route>
					<Route path="/historial-editar" exact>
						<HistorialEditar />
					</Route>
					<Route path="/config" exact>
						<Config {...props} />
					</Route>{" "}
				</Switch>
			</Router>
		</>
	);
}

export default MainWindow;
