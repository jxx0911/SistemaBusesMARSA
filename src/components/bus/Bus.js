import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import CrudFormBus from "./CrudFormBus";
import CrudTableBus from "./CrudTableBus";
import LoaderBus from "./LoaderBus";
import MessageBus from "./MessageBus";

const Bus = () => {
	const [db, setDb] = useState(null);
	const [dataToEdit, setDataToEdit] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const [url, setUrl] = useState(true);

	let api = helpHttp();

	useEffect(() => {
		setLoading(true);
		if (url) {
			helpHttp()
				.get("http://167.99.115.105/bdmarsa/tercera/mostrar/bus")
				.then((res) => {
					//console.log(res);
					if (!res.err) {
						setDb(res);
						setError(null);
					} else {
						setDb(null);
						setError(res);
					}
					setLoading(false);
				});
		}
		setUrl(false);
	}, [url]);

	const createData = (data) => {
		let urlRegistrar = `http://167.99.115.105/bd/bus/insertar?placa=${data.placa}&empresa=${data.empresa}&capacidad=${data.capacidad}&chofer=${data.chofer}&chofer2=${data.chofer2}`;

		api.get(urlRegistrar).then((res) => {
			if (!res.err) {
				console.log(res);
				setDb([...db, res]);
				setUrl(true);
			} else {
				console.log(res);
			}
		});
	};

	const updateData = (data) => {
		let urlActualizar =
			"http://167.99.115.105/bdmarsa/tercera/busPlaca/actualizar";

		let options = {
			body: data,
			headers: { "content-type": "application/json" },
		};

		api.post(urlActualizar, options).then((res) => {
			if (!res.err) {
				console.log(res);
				setUrl(true);
			} else {
				console.log(res);
			}
		});
	};

	return (
		<div className="container">
			<h2 className="d-flex justify-content-center mt-3 fs-1 fw-bold">BUSES</h2>
			<div className="grid-1-2">
				<CrudFormBus
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
					data={db}
				/>
				{loading && <LoaderBus />}
				{error && (
					<MessageBus
						msg={`Error ${error.status}: ${error.statusText}`}
						bgColor="#dc3545"
					/>
				)}
				{db && <CrudTableBus data={db} setDataToEdit={setDataToEdit} />}
			</div>
		</div>
	);
};

export default Bus;
