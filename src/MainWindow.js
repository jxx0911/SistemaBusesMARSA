import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import Tabla from "./components/tabla/Tabla";
import Login from "./components/login/Login";
import { Historial } from "./components/historial/Historial";
import Bus from "./components/bus/Bus";
import Empresa from "./components/empresa/Empresa";
import { MultiStepForm } from "./components/FormSteps/MultiStepForm";
import { Config } from "./components/config/Config";
import { useFormHook } from "./hooks/useFormHook";
import { useStepHook } from "./hooks/useStepHook";
import HistorialEditar from "./components/historial/HistorialEditar";
import { Manifiesto } from "./components/manifiesto/Manifiesto";
import Navbar from "./components/navbar/Navbar";

import "./App.css";

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
						<Navbar />
						<Home />
					</Route>
					<Route path="/tabla" exact>
						<Navbar />
						<Tabla />
					</Route>
					<Route path="/historial" exact>
						<Navbar />
						<Historial />
					</Route>
					<Route path="/buses" exact>
						<Navbar />
						<Bus />
					</Route>
					<Route path="/empresas" exact>
						<Navbar />
						<Empresa />
					</Route>
					<Route path="/ticket" exact>
						<Navbar />
						<MultiStepForm />
					</Route>
					<Route path="/historial-editar" exact>
						<Navbar />
						<HistorialEditar />
					</Route>
					<Route path="/manifiesto" exact>
						<Navbar />
						<Manifiesto />
					</Route>
					<Route path="/config" exact>
						<Navbar />
						<Config {...props} />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default MainWindow;
