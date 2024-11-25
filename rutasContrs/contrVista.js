"use strict";

module.exports = {
	inicio: (req, res) => res.redirect("/listado-de-comics"),

	listadoComics: (req, res) => {

		// Fin
		return res.render("listado");
	},

	altaComics: (req, res) => {

		// Fin
		return res.render("altas");
	},
};
