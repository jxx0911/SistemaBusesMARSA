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

	let api = helpHttp();
	let urlGet = "http://167.99.115.105/bdmarsa/tercera/mostrar/bus";
	let urlPostActualizar =
		"http://167.99.115.105/bdmarsa/tercera/busPlaca/actualizar";
	let urlPostRegistrar = "http://167.99.115.105/bd/bus/insertar";

	useEffect(() => {
		setLoading(true);
		helpHttp()
			.get(urlGet)
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
	}, [urlGet]);

	const createData = (data) => {
		let options = {
			body: data,
			headers: { "content-type": "application/json" },
		};

		api.post(urlPostRegistrar, options).then((res) => {
			//console.log(res);
			if (!res.err) {
				console.log(res);
				setDb([...db, res]);
			} else {
				console.log(res);
				/* setError(res); */
			}
		});
	};

	const updateData = (data) => {
		let endpoint = urlPostActualizar;
		//console.log(endpoint);

		let options = {
			body: data,
			headers: { "content-type": "application/json" },
		};

		api.post(endpoint, options).then((res) => {
			//console.log(res);
			if (!res.err) {
				console.log(res);
				/* let newData = db.map((el) =>
					el.placa === data.placa ? data.empresa : el.empresa : 
				);
				setDb(newData); */
			} else {
				console.log(res);
				/* setError(res); */
			}
		});
	};

	return (
		<div>
			<h2>BUSES</h2>
			<article className="grid-1-2">
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
			</article>
		</div>
	);
};

export default Bus;
