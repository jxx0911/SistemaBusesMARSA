import React, { useState, useEffect } from "react";

const initialForm = {
	ruc: "",
	nombre_empresa: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
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

		if (form.ruc === null) {
			createData(form);
		} else {
			updateData(form);
		}

		handleReset();
	};

	const handleReset = (e) => {
		setForm(initialForm);
		setDataToEdit(null);
	};

	return (
		<div>
			<h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="ruc"
					placeholder="R.U.C."
					onChange={handleChange}
					value={form.ruc}
				/>
				<input
					type="text"
					name="nombre_empresa"
					placeholder="Empresa"
					onChange={handleChange}
					value={form.nombre_empresa}
				/>
				<input type="submit" value="Enviar" />
				<input type="reset" value="Limpiar" onClick={handleReset} />
			</form>
		</div>
	);
};

export default CrudForm;
