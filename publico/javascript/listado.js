"use strict";
window.addEventListener("load", () => {
	// DOM
	const DOM = {
		eliminars: document.querySelectorAll("tbody .eliminar i"),
		marvel_ids: document.querySelectorAll("tbody .marvel_id"),
		inputs: document.querySelectorAll("tbody .input"),
		trs: document.querySelectorAll("tbody tr"),
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
});
