"use strict";
const privateKey = process.env.privateKey;
const publicKey = process.env.publicKey;
const hash = process.env.hash;

module.exports = {
	inicio: (req, res) => res.redirect("/listado-de-comics"),

	listadoComics: (req, res) => {
		// Fin
		return res.render("listado");
	},

	altaComics: async (req, res) => {
		// Obtiene el listado de comics
		const ruta = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=" + publicKey + "&hash=" + hash;
		const listado = await fetch(ruta).then((n) => n.json());

		// Fin
		return res.send(listado)
		return res.render("altas");
	},
};
