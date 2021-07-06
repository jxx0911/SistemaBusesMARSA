import React, { useState, useEffect } from "react";
import { useEmpresaBus } from "../../hooks/useEmpresaBus";

const initialForm = {
	placa: "",
	empresa: "",
	capacidad: "",
	chofer: "",
};

let formTrim = {};

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

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(form);
		if (!form.placa || !form.empresa || !form.capacidad || !form.chofer) {
			alert("Datos incompletos");
			return;
		}

		formTrim = {
			placa: form.placa.trim(),
			empresa: form.empresa.trim(),
			capacidad: form.capacidad,
			chofer: form.chofer.trim(),
		};

		//metodo .some comprueba si almenos un elemento cumple con la condicion implementada
		let found = data.some((item) => item.placa === formTrim.placa);

		found ? updateData(formTrim) : createData(formTrim);

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
					<h3>{dataToEdit ? "EDITAR" : "AGREGAR"}</h3>
					<input
						type="text"
						className="form-control mb-3"
						name="placa"
						placeholder="Placa"
						onChange={handleChange}
						value={form.placa}
					/>
					<input
						type="text"
						className="form-control mb-3"
						placeholder="Empresa"
						onChange={handleChange}
						value={form.empresa}
						name="empresa"
						list="empresas"
					/>
					<datalist id="empresas">
						{empresasBus.map((item, index) => (
							<option key={index} value={item.nombre_empresa}>
								{item.nombre_empresa}
							</option>
						))}
					</datalist>
					<input
						className="form-control mb-3"
						type="number"
						name="capacidad"
						placeholder="Capacidad"
						onChange={handleChange}
						value={form.capacidad}
					/>
					<input
						className="form-control mb-3"
						type="text"
						name="chofer"
						placeholder="Conductor"
						onChange={handleChange}
						value={form.chofer}
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

export default CrudFormBus;
