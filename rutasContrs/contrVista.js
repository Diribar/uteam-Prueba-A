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
		const lote = Number(req.query.lote) || 0;
		const url = req.originalUrl.split("?")[0] + "?lote=";

		// Obtiene el listado de comics
		const ruta = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=" + publicKey + "&hash=" + hash + "&offset=" + lote;
		const info = await fetch(ruta).then((n) => n.json());

		// Obtiene los comics
		const comics = info.data.results;
		const registros = comics.length;

		// Obtiene los lotes vecinos
		const lotes = {
			anterior: lote - 20 >= 0 ? lote - 20 : 0,
			posterior: lote + 20,
		};

		// Fin
		// return res.send(comics);
		return res.render("altas", {comics, url, lotes, lote});
	},
};
