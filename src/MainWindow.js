import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tabla from "./Tabla";
import { BusAdd } from "./BusAdd";
import { MultiStepForm } from "./components/FormSteps/MultiStepForm";
import { Config } from "./components/Config";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/tabla" exact component={Tabla} />
					<Route path="/registro-buses" exact component={BusAdd} />
					<Route path="/ticket" exact component={MultiStepForm} />
					<Route path="/config" exact component={Config} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
