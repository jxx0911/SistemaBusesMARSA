import React, { useEffect, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import CrudFormEmpresa from "./CrudFormEmpresa";
import CrudTableEmpresa from "./CrudTableEmpresa";
import LoaderEmpresa from "./LoaderEmpresa";
import MessageEmpresa from "./MessageEmpresa";

const Empresa = () => {
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
				.get("http://167.99.115.105/bdmarsa/tercera/mostrar/empresaBus")
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
		let urlRegistrar =
			"http://167.99.115.105/bdmarsa/tercera/busEmpresa/registrar";

		let options = {
			body: data,
			headers: { "content-type": "application/json" },
		};

		api.post(urlRegistrar, options).then((res) => {
			if (!res.err) {
				console.log(res);
				setDb([...db, res]);
				setUrl(true);
			} else {
				console.log(res);
				/* setError(res); */
			}
		});
	};

	const updateData = (data) => {
		let urlPostActualizar = `http://167.99.115.105/bdmarsa/tercera/busEmpresa/actualizar?ruc=${data.ruc}&nombre_empresa=${data.empresa}`;
		//console.log(endpoint);

		let options = {
			body: data,
			headers: { "content-type": "application/json" },
		};

		api.post(urlPostActualizar, options).then((res) => {
			if (!res.err) {
				console.log(res);
				let newData = db.map((el) =>
					el.ruc === data.ruc ? data.nombre_empresa : el.nombre_empresa
				);
				setDb(newData);
			} else {
				console.log(res);
				/* setError(res); */
			}
		});
	};

	return (
		<div className="container">
			<h2 className="d-flex justify-content-center mt-3 fs-1 fw-bold">
				EMPRESAS
			</h2>
			<article className="grid-1-2">
				<CrudFormEmpresa
					createData={createData}
					updateData={updateData}
					dataToEdit={dataToEdit}
					setDataToEdit={setDataToEdit}
					data={db}
				/>
				{loading && <LoaderEmpresa />}
				{error && (
					<MessageEmpresa
						msg={`Error ${error.status}: ${error.statusText}`}
						bgColor="#dc3545"
					/>
				)}
				{db && <CrudTableEmpresa data={db} setDataToEdit={setDataToEdit} />}
			</article>
		</div>
	);
};

export default Empresa;
