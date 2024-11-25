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
		// Variables
		const lote = req.query.lote || 0;

		// Obtiene el listado de comics
		const ruta = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=" + publicKey + "&hash=" + hash + "&offset=" + lote;
		const info = await fetch(ruta).then((n) => n.json());

		// Obtiene los comics
		const comics = info.data.results;

		// Fin
		return res.send(comics);
		return res.render("altas", {comics});
	},
};
