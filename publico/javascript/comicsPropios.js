"use strict";
window.addEventListener("load", () => {
	// DOM
	const DOM = {
		trs: document.querySelectorAll("tbody tr"),
		editars: document.querySelectorAll("tbody .editar i"),
		marvel_ids: document.querySelectorAll("tbody .marvel_id"),
		inputs: document.querySelectorAll("tbody input"),
		eliminars: document.querySelectorAll("tbody .eliminar i"),
	};

	// Eventos - eliminar
	DOM.eliminars.forEach((eliminar, fila) => {
		eliminar.addEventListener("click", () => {
			// Oculta la fila del ícono eliminar
			DOM.trs[fila].classList.add("ocultar");

			// Envía los datos
			let datos = "/?marvel_id=" + DOM.marvel_ids[fila].innerHTML;

			fetch("/api/eliminar" + datos);
		});
	});
	// Eventos - confirmar
	DOM.editars.forEach((editar, fila) => {
		editar.addEventListener("click", () => {
			// Si el ícono está inactivo interrumpe la función
			if (editar.className.includes("inactivo")) return;

			// Acciones si el ícono figura como edición
			if (editar.className.includes("fa-pen")) {
				// Quita el 'disabled' de los inputs
				for (let i = 0; i < 3; i++) DOM.inputs[i + fila * 3].disabled = false;

				// Reemplaza el ícono por confirmar
				editar.classList.replace("fa-pen", "fa-circle-check");

				// Fin
				return;
			}

			// De lo contrario, reemplaza el ícono confirmar por edición
			editar.classList.replace("fa-circle-check", "fa-pen");

			// Obtiene los datos
			let datos = "/?marvel_id=" + DOM.marvel_ids[fila].innerHTML;
			for (let i = 0; i < 3; i++) {
				// Le asigna el 'disabled' a los inputs
				const input = DOM.inputs[i + fila * 3];
				input.disabled = true;

				// Consigue los datos
				if (input.value == "s/d") continue;
				else datos += "&";
				datos += input.name + "=" + encodeURIComponent(input.value);
			}

			// Envía los datos
			fetch("/api/editar" + datos);
		});
	});
	// Activa/ inactiva el botón confirmar
	DOM.inputs.forEach((input, i) => {
		input.addEventListener("input", () => {
			// Averigua la fila
			const fila = Math.floor(i / 3);

			// Si algún campo no tiene valor, inactiva el ícono editars
			DOM.editars[fila].classList.remove("inactivo"); // activo
			for (let campo = 0; campo < 3; campo++) {
				const dato = DOM.inputs[fila * 3 + campo];
				if (!dato.value) DOM.editars[fila].classList.add("inactivo"); // inactivo
			}
		});
	});
});
