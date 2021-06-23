import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tabla from "./Tabla";
import { Login } from "./Login";
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
					<Route path="/" exact>
						<Login />
					</Route>
					<Route path="/dashboard" exact>
						<Navbar />
						<Switch>
							<Route path="/dashboard/home" exact>
								<Home />
							</Route>
							<Route path="/dashboard/tabla" exact>
								<Tabla />
							</Route>
							<Route path="/dashboard/historial" exact>
								<Historial />
							</Route>
							<Route path="/dashboard/registro-buses" exact>
								<BusAdd />
							</Route>
							<Route path="/dashboard/ticket" exact>
								<MultiStepForm />
							</Route>
							<Route path="/dashboard/historial-editar" exact>
								<HistorialEditar />
							</Route>
							<Route path="/dashboard/config" exact>
								<Config {...props} />
							</Route>{" "}
							*/
						</Switch>
					</Route>
					{}
				</Switch>
			</Router>
		</>
	);
}

export default MainWindow;
