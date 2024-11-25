"use strict";
const publicKey = process.env.publicKey;
const hash = process.env.hash;
const fsSync = require("node:fs");
const fsAsync = require("node:fs/promises");

module.exports = {
	inicio: (req, res) => res.redirect("/listado-de-comics"),

	listadoComics: (req, res) => {
		// Obtiene la base de datos
		const rutaNombre = path.join(__dirname, "../auxiliar/comics.json");
		let baseDatos = JSON.parse(fsSync.readFileSync(rutaNombre, {encoding: "utf8"}));

		// Fin
		return res.render("listado", {baseDatos});
	},

	altaComics: async (req, res) => {
		// Variables
		const lote = Number(req.query.lote) || 0;
		const url = req.originalUrl.split("?")[0] + "?lote=";

		// Obtiene el listado de comics
		const ruta = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=" + publicKey + "&hash=" + hash + "&offset=" + lote;
		let info = fetch(ruta).then((n) => n.json());

		// Obtiene la base de datos
		const rutaNombre = path.join(__dirname, "../auxiliar/comics.json");
		let baseDatos = fsAsync.readFile(rutaNombre, {encoding: "utf8"}).then((n) => JSON.parse(n));

		// Espera hasta tener la info
		[info, baseDatos] = await Promise.all([info, baseDatos]);

		// Obtiene info de detalle
		const comics = info.data.results;
		const marvelIds = baseDatos.map((n) => n.marvel_id);

		// Obtiene los lotes vecinos
		const lotes = {
			anterior: lote - 20 >= 0 ? lote - 20 : 0,
			posterior: lote + 20,
		};

		// Fin
		// return res.send(comics);
		return res.render("altas", {comics, url, lotes, lote, marvelIds});
	},
};
