"use strict";
const fs = require("node:fs");
const rutaNombre = path.join(__dirname, "../auxiliar/comics.json");

module.exports = {
	agregar: (req, res) => {
		// Variables
		const datos = req.query;
		let info = obtieneComicsDeBd();

		// Agrega el nuevo registro y lo guarda
		info.push(datos);
		info.sort((a, b) => (a.titulo < b.titulo ? -1 : 1)); // los ordena por id
		fs.writeFileSync(rutaNombre, JSON.stringify(info));

		// Fin
		return res.json();
	},
	eliminar: (req, res) => {
		// Variables
		const {marvel_id} = req.query;
		let info = obtieneComicsDeBd();

		// Elimina el registro y lo guarda
		info = info.filter((n) => n.marvel_id != marvel_id);
		fs.writeFileSync(rutaNombre, JSON.stringify(info));

		// Fin
		return res.json();
	},
	editar: (req, res) => {
		// Variables
		console.log(32, req.query);
		return

		const datos = req.query;
		let info = obtieneComicsDeBd();

		// Actualiza el registro y lo guarda
		info = info.filter((n) => n.marvel_id != marvel_id);
		info.push(datos);
		info.sort((a, b) => (a.titulo < b.titulo ? -1 : 1)); // los ordena por id
		fs.writeFileSync(rutaNombre, JSON.stringify(info));

		// Fin
		return res.json();
	},
};

const obtieneComicsDeBd = () => {
	// Obtiene la BD
	const BD = fs.readFileSync(rutaNombre, "utf8");
	let info = JSON.parse(BD);

	// Fin
	return info;
};
