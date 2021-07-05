import React, { useState, useEffect } from "react";
import { useEmpresaBus } from "../../hooks/useEmpresaBus";

const initialForm = {
	placa: "",
	empresa: "",
	capacidad: "",
	chofer: "",
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

		if (!form.placa || !form.empresa || !form.capacidad || form.chofer) {
			alert("Datos incompletos");
			return;
		}

		//metodo .some comprueba si almenos un elemento cumple con la condicion implementada
		let found = data.some((item) => item.placa === form.placa);

		found ? updateData(form) : createData(form);

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
					<input type="submit" value="Enviar" />
					<input type="reset" value="Limpiar" onClick={handleReset} />
				</div>
			</form>
		</div>
	);
};

export default CrudFormBus;
