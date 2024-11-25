"use strict";
window.addEventListener("load", () => {
	// DOM
	const DOM = {
		trs: document.querySelectorAll("tbody tr"),
		editars: document.querySelectorAll("tbody .editar"),
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
	// Eventos - editar
	DOM.editars.forEach((editar, fila) => {
		editar.addEventListener("click", () => {
			// Si el ícono está inactivo interrumpe la función
			if (editar.className.includes("inactivo")) return;
			editar.classList.replace("fa-circle-check", "fa-pen");

			// Obtiene los datos
			let datos = "";
			for (let i = 0; i < 3; i++) {
				// Consigue los datos
				const input = DOM.inputs[i + fila * 3];
				if (!datos) datos += "?";
				else if (input.value == "s/d") continue;
				else datos += "&";
				datos += input.name + "=" + input.value;

				// Envía los datos
				fetch("/api/editar" + datos);
			}
		});
	});
});
