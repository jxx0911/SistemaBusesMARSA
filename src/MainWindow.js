import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tabla from "./Tabla";
import { BusAdd } from "./BusAdd";
import { WizardTicket } from "./WizardTicket";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/reports" component={Tabla} />
					<Route path="/products" component={BusAdd} />
					<Route path="/ticket" component={WizardTicket} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
