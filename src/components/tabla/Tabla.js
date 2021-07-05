import React, { useState } from "react";
import { Excel } from "../../helpers/Excel";
import { useSedes } from "../../hooks/useSedes";
import { useServicios } from "../../hooks/useServicios";
import { Fecha } from "../../helpers/Fecha";
import axios from "axios";

import "../../App.css";
import MaterialTable from "material-table";
import "bootstrap/dist/css/bootstrap.min.css";

//instancia de la clase Date
let day = new Date();
//Objeto vacio declarado directamente para los campos del formulario
const initialForm = {
	cod_servicio: "",
	nombre_sede: "",
	fecha_salida: "",
};
//Objeto vacio para los campos del API del registro de Lote
let lote = {};
//Variable declarada para obtener del API, el dato faltante de la Sede
let sedeLote = "";
//Variable declarada para obtener del API, el dato faltante del Servicio
let servicioLote = "";
//Objeto con informacion estatica para el API del registro de informacion
let informacionInicial = {
	ruc: "20477167561",
	id_historia_login: 2,
};

function Tabla() {
	//Destructuracion del helper Excel
	//importExcel() -> funcion para obtener la data de un archivo Excel
	//datos -> data extraida del libro Excel
	//coldDefs -> cabeceras de columnas extraidas del libro Excel
	const { importExcel, datos, colDefs } = Excel();
	//Sedes extraidas del metodo GET usando un Custom Hook
	const { sedes } = useSedes();
	//Servicios extraidas del metodo GET usando un Custom Hook
	const { servicios } = useServicios();
	//estado de band declarado para poder usar una condicional para extraer datos faltantes
	const [band, setBand] = useState(false);
	//estado de file declarado para habilitar el input tipo file
	const [file, setFile] = useState(false);
	//estado de form declarado para modificar el initialForm
	const [form, setForm] = useState(initialForm);

	//funcion handleInputChange para el cambio de valores de los input
	const handleInputChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	//condicional de band para recorrer la informacion extraida de los Custom Hook y obtener los datos faltantes
	if (band) {
		//Sedes
		sedes.forEach((valor) => {
			if (valor.sede === form.nombre_sede) {
				sedeLote = valor.cod_sede.toString();
			}
		});
		//Servicios
		servicios.forEach((valor) => {
			if (valor.id_servicio === parseInt(form.cod_servicio)) {
				servicioLote = valor.nombre_servicio;
			}
		});
	}

	//Funcion asincrona para hace la peticion HTTP al API de validar Lote
	const validarLote = async (e) => {
		//Respuesta "resp1" usando "fetch" con metodo GET, en la Url se usa string literal para los datos necesarios
		const resp1 = await fetch(
			`http://167.99.115.105/bdmarsa/tercera/lote/validar?cod_servicio=${form.cod_servicio}&nombre_sede=${form.nombre_sede}&fecha_salida=${form.fecha_salida}`
		);
		//Constante "data1" usando la respuesta, pasandolo a JSON
		const data1 = await resp1.json();
		//Constante "validacion" usando la respuesta de la data
		const validacion = data1[0]["respuesta"];

		//Condicional para la respuesta
		if (validacion === "SI") {
			alert("El Lote ya existe");
			setForm(initialForm);
		} else if (validacion === "NO") {
			//Se habilita el estado de bandera para la condicional de datos faltantes
			setBand(!band);
			//Se usa el objeto "lote" para almacenar el body que se usara para el API del registro de lote
			lote = {
				cod_servicio: form.cod_servicio,
				nombre_servicio: servicioLote, //obtenido de la condicional para datos faltantes
				cod_sede: sedeLote, //obtenido de la condicional para datos faltantes
				nombre_sede: form.nombre_sede,
				fecha_actual: Fecha().fechaHoy, //Se importa un helper Fecha() para obtener el la fecha con formato definido
				hora: day.toLocaleTimeString(), //usando la instancia de la clase Date
				fecha_salida: form.fecha_salida,
			};
			//Se usa el objeto informacionInicial declarado con informacion estatica,
			//para almacenar el parte del body para el API del registro de informacion importada
			informacionInicial = {
				...informacionInicial,
				nombre_sede: form.nombre_sede,
				fecha_salida_formulario: form.fecha_salida,
				cod_Servicio: parseInt(form.cod_servicio),
			};
			//Se habilita el estado de file para el input de tipo file
			setFile(!file);
		}
	};

	//Funcion asincrona para hace la peticion HTTP al API de registrar Lote
	const registrarLote = async () => {
		//Respuesta "resp2" usando "axios" con metodo POST, en el body se usa el objeto "lote"
		const resp2 = await axios.post(
			"http://167.99.115.105/bdmarsa/tercera/lote/registrar",
			lote
		);
		//se destructura la data obtenida de "resp2
		const { data } = resp2;
		//Constante "respuesta", obtenido del campo Respuesta de la data
		const respuesta = data.Respuesta;

		//Condicional de respuesta
		if (respuesta === "OK") {
			//!!!!!!!!!!!!!!!!!POR OBSERVAR!!!!!!!!!!!!!!!!!!!!!!!
			informacionInicial = {
				...informacionInicial,
				resultp2: "",
				asistencia: "",
			};
			//se declara un objeto body vacio, que se usara para fucionar cada registro del JSON que manda excel en "datos",
			//y la informacionInicial con informacion adicional necesaria para el API de registrar informacion importada
			let body = {};
			//se recorre los "datos" obtenidos del libro Excel, funcion asincrona debido a que por cada registro,
			//se hara una peticion HTTP al API de informacion importada
			datos.map(async (excel) => {
				//se usa body para almacenar la union de cada registro, y la informacion incial,
				//"excel" alterara su informacion debido que es la variable que iterera toda la data
				//Object.assign hace la fucion de dos objetos
				body = await Object.assign(excel, informacionInicial);
				//se usa "axios" con metodo POST para hacer el registro, recibiendo "body"
				await axios.post(
					"http://167.99.115.105/bdmarsa/tercera/infoImportada/registrada",
					body
				);
			});
		}
	};

	console.log(datos);

	return (
		<>
			<div className="App container">
				<h1 className="mt-3" align="center">
					TABLE IMPORT
				</h1>
				{/* <h4 align="center">Descripcion</h4> */}
				<div className="container">
					{/* Select para Sede */}
					<div>
						<div className="form-label">SEDE</div>
						<select
							name="nombre_sede"
							className="form-select"
							onChange={handleInputChange}
							value={form.nombre_sede}
						>
							<option defaultValue> -- SELECCIONE SEDE -- </option>
							{sedes.map((item, index) => (
								<option key={index} value={item.sede}>
									{item.sede}
								</option>
							))}
						</select>
					</div>
					{/* Select para Servicio */}
					<div>
						<div className="form-label">SERVICIO</div>
						<select
							className="form-select"
							onChange={handleInputChange}
							value={form.cod_servicio}
							name="cod_servicio"
						>
							<option defaultValue> -- SELECCIONE SERVICIO -- </option>
							{servicios.map((item, index) => (
								<option key={index} value={item.id_servicio}>
									{item.nombre_servicio}
								</option>
							))}
						</select>
					</div>
					{/* Input para fecha */}
					<div>
						<label className="form-label">FECHA DE SALIDA</label>
						<input
							type="date"
							className="form-control"
							name="fecha_salida"
							placeholder="Input placeholder"
							onChange={handleInputChange}
							value={form.fecha_salida}
						/>
					</div>
					<div className="container d-flex flex-column flex-lg-row">
						<button
							className="btn btn-dark m-3"
							onClick={validarLote}
							disabled={file ? "disabled" : ""}
						>
							Validar Lote
						</button>

						{file ? (
							<input
								className="form-input m-3"
								type="file"
								onChange={importExcel}
							/>
						) : (
							""
						)}
					</div>
				</div>

				<div className="table-responsive">
					<MaterialTable title="Marsa Data" data={datos} columns={colDefs} />
				</div>
				<button
					className="btn btn-success float-end mb-3"
					onClick={registrarLote}
				>
					Registrar
				</button>
			</div>
		</>
	);
}

export default Tabla;
