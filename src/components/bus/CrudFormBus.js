import React, { useState, useEffect } from "react";
import { useEmpresaBus } from "../../hooks/useEmpresaBus";

const initialForm = {
	placa: "",
	empresa: "",
	capacidad: "",
};

const CrudFormBus = ({
	createData,
	updateData,
	dataToEdit,
	setDataToEdit,
	data,
}) => {
	const [form, setForm] = useState(initialForm);
	const { empresasBus } = useEmpresaBus();

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

	console.log(form);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!form.placa || !form.empresa || !form.capacidad) {
			alert("Datos incompletos");
			return;
		}

		console.log(data);
		console.log(form);

		//metodo .some comprueba si almenos un elemento cumple con la condicion implementada
		let found = data.some((item) => item.placa === form.placa);

		found ? updateData(form) : createData(form);

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
			<h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="placa"
					placeholder="Placa"
					onChange={handleChange}
					value={form.placa}
				/>
				<select name="empresa" className="form-select" onChange={handleChange}>
					{empresasBus.map((item, index) =>
						item.nombre_empresa !== form.empresa ? (
							<option key={index} value={form.empresa}>
								{item.nombre_empresa}
							</option>
						) : (
							<option key={index} value={form.empresa} selected>
								{form.empresa}
							</option>
						)
					)}
				</select>
				<input
					type="number"
					name="capacidad"
					placeholder="capacidad"
					onChange={handleChange}
					value={form.capacidad}
				/>
				<input type="submit" value="Enviar" />
				<input type="reset" value="Limpiar" onClick={handleReset} />
			</form>
		</div>
	);
};

export default CrudFormBus;
