import React, { Component } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Login extends Component {
	state = {
		form: {
			username: "",
			password: "",
		},
	};

	handleChange = async (e) => {
		await this.setState({
			form: {
				...this.state.form,
				[e.target.name]: e.target.value,
			},
		});
	};

	iniciarSesion = async () => {
		await axios
			.get(
				`http://167.99.115.105/bdmarsa/tercera/login/validar?user=${
					this.state.form.username
				}&contra=${md5(this.state.form.password)}`
			)
			.then((response) => {
				console.log(response);
				return response.data;
			})
			.then((response) => {
				if (response.length > 0) {
					console.log(response);
					var respuesta = response[0];
					cookies.set("id", respuesta.id, { path: "/" });
					cookies.set("apellido_paterno", respuesta.apellido_paterno, {
						path: "/",
					});
					cookies.set("apellido_materno", respuesta.apellido_materno, {
						path: "/",
					});
					cookies.set("nombre", respuesta.nombre, { path: "/" });
					cookies.set("username", respuesta.username, { path: "/" });
					/* alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`); */
					window.location.href = "./home";
				} else {
					console.log(response);
					alert("El usuario o la contraseña no son correctos");
				}
			})
			.catch((error) => {
				console.log(this.state.form);
				console.log(error);
			});
	};

	componentDidMount() {
		if (cookies.get("username")) {
			window.location.href = "./home";
		}
	}

	render() {
		return (
			<div className="containerPrincipal">
				<div className="containerSecundario">
					<div className="form-group">
						<label>Usuario: </label>
						<br />
						<input
							type="text"
							className="form-control"
							name="username"
							onChange={this.handleChange}
						/>
						<br />
						<label>Contraseña: </label>
						<br />
						<input
							type="password"
							className="form-control"
							name="password"
							onChange={this.handleChange}
						/>
						<br />
						<button
							className="btn btn-primary"
							onClick={() => this.iniciarSesion()}
						>
							Iniciar Sesión
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
