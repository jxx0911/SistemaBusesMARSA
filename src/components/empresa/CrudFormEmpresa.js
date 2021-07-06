import React, { useState, useEffect } from "react";

const initialForm = {
	ruc: "",
	nombre_empresa: "",
};

let formTrim = {};

const CrudFormEmpresa = ({
	createData,
	updateData,
	dataToEdit,
	setDataToEdit,
	data,
}) => {
	const [form, setForm] = useState(initialForm);

	useEffect(() => {
		if (dataToEdit) {
			setForm(dataToEdit);
		} else {
			setForm(initialForm);
		}
	}, [dataToEdit]);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.ruc || !form.nombre_empresa) {
			alert("Datos incompletos");
			return;
		}

		console.log(data);
		console.log(form.ruc);

		formTrim = {
			ruc: form.ruc.trim(),
			nombre_empresa: form.nombre_empresa.trim(),
		};

		//metodo .some comprueba si almenos un elemento cumple con la condicion implementada
		let found = data.some((item) => item.ruc === formTrim.ruc);

		found ? updateData(formTrim) : createData(formTrim);

		/* if (form.ruc === null) {
			createData(form);
		} else {
			updateData(form);
		} */

		handleReset();
	};

	const handleReset = (e) => {
		setForm(initialForm);
		setDataToEdit(null);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="container">
					<h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
					<input
						className="form-control mb-3"
						type="text"
						name="ruc"
						placeholder="R.U.C."
						onChange={handleChange}
						value={form.ruc}
					/>
					<input
						className="form-control mb-3"
						type="text"
						name="nombre_empresa"
						placeholder="Empresa"
						onChange={handleChange}
						value={form.nombre_empresa}
					/>
					<div className="float-end mb-3">
						<button className="btn btn-warning m-1" onClick={handleReset}>
							Limpiar
						</button>
						<button className="btn btn-success m-1">Enviar</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CrudFormEmpresa;
