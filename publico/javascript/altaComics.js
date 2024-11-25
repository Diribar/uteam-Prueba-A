"use strict";
window.addEventListener("load", () => {
	// DOM
	const DOM = {
		agregars: document.querySelectorAll("tbody .agregar i"),
		marvel_ids: document.querySelectorAll("tbody .marvel_id"),
		inputs: document.querySelectorAll("tbody .input"),
	};

	// Eventos
	DOM.agregars.forEach((agregar, fila) => {
		agregar.addEventListener("click", () => {
			// Oculta el ícono agregar
			agregar.classList.add("ocultar");

			// Obtiene los datos
			let indiceInicial = fila * 4;
			let datos = "";
			for (let indice = 0; indice < 4; indice++) {
				// Averiguaciones particulares
				const input = DOM.inputs[indiceInicial + indice];
				if (!indice) datos += "/?";
				else if (input.innerHTML != "s/d") datos += "&";
				else continue;

				// Agrega un valor
				datos += input.id + "=" + input.innerHTML;
			}

			// Envía los datos
			fetch("/api/agregar" + datos);
		});
	});
});
