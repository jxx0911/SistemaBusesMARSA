import React, { useState } from "react";
import "./HistorialEditar.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

let body = {
	ruc: "20477167561",
	id_historia_login: 2,
};

let initialBody = {
	nro: null,
	tipoDocumento: "DNI",
	nroDocumento: "",
	codigo: "",
	apePaterno: "",
	apeMaterno: "",
	nombres: "",
	sexo: "",
	celular: "",
	correo: "",
	apenombres: "",
	f_nac: "",
	fecha_salida: "",
	sede: "",
	clinica: "",
	asistencia: "",
	edad: "",
	resultp1: "",
	resultp2: "",
	compania: "MINERA AURIFERA RETAMAS S.A.",
	unidad: "SAN ANDRES",
	empresaContratista: "",
	rucContratista: "",
	zonaTrabajo: "",
	areaTrabajo: "",
	puesto: "",
	ubicacion: "",
	direccion: "",
	distrito: "",
	provincia: "",
	departamento: "",
	destino: "",
	lugarEmbarque: "",
	status: "",
};

export const HistorialEditar = () => {
	const location = useLocation();
	const fecha_salida_formulario = location.state?.fecha_salida;
	const nombre_sede = location.state?.nombre_sede;
	const cod_Servicio = location.state?.cod_Servicio;

	const [form, setForm] = useState(initialBody);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const registrar = async (e) => {
		e.preventDefault();

		body = {
			...body,
			fecha_salida_formulario,
			nombre_sede,
			cod_Servicio,
		};

		let post = {};
		post = Object.assign(body, form);

		console.log(post);

		const resp = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/infoImportada/registrada",
			post
		);
		console.log(resp);
	};

	return (
		<>
			<div className="containerGrid">
				<div className="tipoDocumento container m-1">
					<label className="form-label">Tipo de Documento</label>
					<input
						className="form-control"
						name="tipoDocumento"
						type="text"
						onChange={handleChange}
						value={form.tipoDocumento}
						readOnly
					/>
				</div>
				<div className="nroDocumento container m-1">
					<label className="form-label">Nº de Documento</label>
					<input
						className="form-control"
						name="nroDocumento"
						type="number"
						onChange={handleChange}
						value={form.nroDocumento}
						/* onKeyPress={handleKeyPress} */
					/>
				</div>
				<div className="codigo container m-1">
					<label className="form-label">Codigo</label>
					<input
						className="form-control"
						name="codigo"
						type="text"
						onChange={handleChange}
						value={form.codigo}
					/>
				</div>
				<div className="apePaterno container m-1">
					<label className="form-label">Apellido Paterno</label>
					<input
						className="form-control"
						name="apePaterno"
						type="text"
						onChange={handleChange}
						value={form.apePaterno}
					/>
				</div>
				<div className="apeMaterno container m-1">
					<label className="form-label">Apellido Materno</label>
					<input
						className="form-control"
						name="apeMaterno"
						type="text"
						onChange={handleChange}
						value={form.apeMaterno}
					/>
				</div>
				<div className="nombres container m-1">
					<label className="form-label">Nombres</label>
					<input
						className="form-control"
						name="nombres"
						type="text"
						onChange={handleChange}
						value={form.nombres}
					/>
				</div>
				<div className="sexo container m-1">
					<label className="form-label">Sexo</label>
					<input
						className="form-control"
						name="sexo"
						type="text"
						onChange={handleChange}
						value={form.sexo}
					/>
				</div>
				<div className="celular container m-1">
					<label className="form-label">Celular</label>
					<input
						className="form-control"
						name="celular"
						type="number"
						onChange={handleChange}
						value={form.celular}
					/>
				</div>
				<div className="correo container m-1">
					<label className="form-label">Correo</label>
					<input
						className="form-control"
						name="correo"
						type="email"
						onChange={handleChange}
						value={form.correo}
					/>
				</div>
				<div className="apenombres container m-1">
					<label className="form-label">Apellidos y Nombres</label>
					<input
						className="form-control"
						name="apenombres"
						type="text"
						onChange={handleChange}
						value={form.apenombres}
					/>
				</div>
				<div className="f_nac container m-1">
					<label className="form-label">Fecha de Nacimiento</label>
					<input
						className="form-control"
						name="f_nac"
						type="text"
						placeholder="AAAA-MM-DD"
						onChange={handleChange}
						value={form.f_nac}
					/>
				</div>
				<div className="fecha_salida container m-1">
					<label className="form-label">Fecha de Atencion</label>
					<input
						className="form-control"
						name="fecha_salida"
						type="text"
						placeholder="AAAA-MM-DD"
						onChange={handleChange}
						value={form.fecha_salida}
					/>
				</div>
				<div className="sede container m-1">
					<label className="form-label">Sede</label>
					<input
						className="form-control"
						name="sede"
						type="text"
						onChange={handleChange}
						value={form.sede}
					/>
				</div>
				<div className="clinica container m-1">
					<label className="form-label">Clinica</label>
					<input
						className="form-control"
						name="clinica"
						type="text"
						onChange={handleChange}
						value={form.clinica}
					/>
				</div>
				<div className="asistencia container m-1">
					<label className="form-label">Asistencia</label>
					<input
						className="form-control"
						name="asistencia"
						type="text"
						onChange={handleChange}
						value={form.asistencia}
					/>
				</div>
				<div className="edad container m-1">
					<label className="form-label">Edad</label>
					<input
						className="form-control"
						name="edad"
						type="number"
						onChange={handleChange}
						value={form.edad}
					/>
				</div>
				<div className="resultp1 container m-1">
					<label className="form-label">Resultado P1</label>
					<input
						className="form-control"
						name="resultp1"
						type="text"
						onChange={handleChange}
						value={form.resultp1}
					/>
				</div>
				<div className="resultp2 container m-1">
					<label className="form-label">Resultado P2</label>
					<input
						className="form-control"
						name="resultp2"
						type="text"
						onChange={handleChange}
						value={form.resultp2}
					/>
				</div>
				<div className="compania container m-1">
					<label className="form-label">Compañia</label>
					<input
						className="form-control"
						name="compania"
						type="text"
						onChange={handleChange}
						value={form.compania}
						readOnly
					/>
				</div>
				<div className="unidad container m-1">
					<label className="form-label">Unidad</label>
					<input
						className="form-control"
						name="unidad"
						type="text"
						onChange={handleChange}
						value={form.unidad}
						readOnly
					/>
				</div>
				<div className="empresaContratista container m-1">
					<label className="form-label">Empresa Contratista</label>
					<input
						className="form-control"
						name="empresaContratista"
						type="text"
						onChange={handleChange}
						value={form.empresaContratista}
					/>
				</div>
				<div className="rucContratista container m-1">
					<label className="form-label">RUC Contratista</label>
					<input
						className="form-control"
						name="rucContratista"
						type="number"
						onChange={handleChange}
						value={form.rucContratista}
					/>
				</div>
				<div className="zonaTrabajo container m-1">
					<label className="form-label">Zona de Trabajo</label>
					<input
						className="form-control"
						name="zonaTrabajo"
						type="text"
						onChange={handleChange}
						value={form.zonaTrabajo}
					/>
				</div>
				<div className="areaTrabajo container m-1">
					<label className="form-label">Area de Trabajo</label>
					<input
						className="form-control"
						name="areaTrabajo"
						type="text"
						onChange={handleChange}
						value={form.areaTrabajo}
					/>
				</div>
				<div className="puesto container m-1">
					<label className="form-label">Puesto</label>
					<input
						className="form-control"
						name="puesto"
						type="text"
						onChange={handleChange}
						value={form.puesto}
					/>
				</div>
				<div className="ubicacion container m-1">
					<label className="form-label">Ubicacion</label>
					<input
						className="form-control"
						name="ubicacion"
						type="text"
						onChange={handleChange}
						value={form.ubicacion}
					/>
				</div>
				<div className="direccion container m-1">
					<label className="form-label">Direccion</label>
					<input
						className="form-control"
						name="direccion"
						type="text"
						onChange={handleChange}
						value={form.direccion}
					/>
				</div>
				<div className="distrito container m-1">
					<label className="form-label">Distrito</label>
					<input
						className="form-control"
						name="distrito"
						type="text"
						onChange={handleChange}
						value={form.distrito}
					/>
				</div>
				<div className="provincia container m-1">
					<label className="form-label">Provincia</label>
					<input
						className="form-control"
						name="provincia"
						type="text"
						onChange={handleChange}
						value={form.provincia}
					/>
				</div>
				<div className="departamento container m-1">
					<label className="form-label">Departamento</label>
					<input
						className="form-control"
						name="departamento"
						type="text"
						onChange={handleChange}
						value={form.departamento}
					/>
				</div>
				<div className="destino container m-1">
					<label className="form-label">Destino</label>
					<input
						className="form-control"
						name="destino"
						type="text"
						onChange={handleChange}
						value={form.destino}
					/>
				</div>
				<div className="lugarEmbarque container m-1">
					<label className="form-label">Lugar de Embarque</label>
					<input
						className="form-control"
						name="lugarEmbarque"
						type="text"
						onChange={handleChange}
						value={form.lugarEmbarque}
					/>
				</div>
				<div className="status container m-1">
					<label className="form-label">STATUS</label>
					<input
						className="form-control"
						name="status"
						type="text"
						onChange={handleChange}
						value={form.status}
					/>
				</div>
			</div>
			<button onClick={registrar} className="btn btn-success float-end m-2">
				REGISTRAR
			</button>
		</>
	);
};
