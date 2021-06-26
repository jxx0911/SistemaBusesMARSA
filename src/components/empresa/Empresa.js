import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import Loader from "./Loader";
import Message from "./Message";

const CrudApi = () => {
	const [db, setDb] = useState(null);
	const [dataToEdit, setDataToEdit] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	let api = helpHttp();
	let urlGet = "http://167.99.115.105/bdmarsa/tercera/mostrar/empresaBus";
	let urlPostActualizar =
		"http://167.99.115.105/bdmarsa/tercera/busEmpresa/actualizar";
	let urlPostRegistrar =
		"http://167.99.115.105/bdmarsa/tercera/busEmpresa/registrar";

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
				setDb([...db, res]);
			} else {
				setError(res);
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

		api.put(endpoint, options).then((res) => {
			//console.log(res);
			if (!res.err) {
				let newData = db.map((el) => (el.id === data.id ? data : el));
				setDb(newData);
			} else {
				setError(res);
			}
		});
	};

	return (
		<div>
			<h2>CRUD API</h2>
			<article className="grid-1-2">
				<CrudForm
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
				/>
				{loading && <Loader />}
				{error && (
					<Message
						msg={`Error ${error.status}: ${error.statusText}`}
						bgColor="#dc3545"
					/>
				)}
				{db && <CrudTable data={db} setDataToEdit={setDataToEdit} />}
			</article>
		</div>
	);
};

export default CrudApi;
