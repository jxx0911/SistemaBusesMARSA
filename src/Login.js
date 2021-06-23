import React, { Component } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Login = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		const { usuario, contrasena } = data;
		const pass = md5(contrasena);
		const httplogin = {
			usuario,
			contrasena: pass,
		};

		console.log(httplogin);

		axios
			.post("http://167.99.115.105/baseDatos/login", httplogin)
			.then((response) => {
				console.log(response);
				return response;
			})
			/* .then((response) => {
            console.log(response);
            if (Object.keys(response).length > 0) {
                var respuesta = response[0];
                cookies.set("usuario", respuesta.usuario, { path: "/" });
                alert(`Bienvenido ${respuesta.usuario} `);
                window.location.href = "./menu";
            } else {
                alert("Usuario o contraseña no son correctos");
            }
        }) */
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="containerPrincipal">
			<div className="box">
				<div className="box-form">
					<div className="box-login-tab"></div>
					<div className="box-login-title">
						<div className="i i-login"></div>
						<h2>LOGwfwefwIN</h2>
					</div>
					<div className="box-login">
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="fieldset-body" id="login_form">
								<p className="field">
									<label>E-MAIL</label>
									<input
										type="text"
										id="usuario"
										name="usuario"
										title="usuario"
										{...register("usuario", {
											required: true,
										})}
									/>
									<span id="valida" className="i i-warning"></span>
								</p>
								<p className="field">
									<label>PASSWORD</label>
									<input
										type="password"
										name="contrasena"
										title="contrasena"
										{...register("contrasena", {
											required: true,
										})}
									/>
									<span id="valida" className="i i-close"></span>
								</p>

								<label className="checkbox"></label>
								<button type="submit">Iniciar Sesion</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
