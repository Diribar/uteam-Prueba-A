"use strict";
const fs = require("node:fs");

module.exports = {
	agregar: (req, res) => {
		// Variables
		const datos = req.query;

		// Obtiene la BD
		const rutaNombre = path.join(__dirname, "../auxiliar/comics.json");
		const BD = fs.readFileSync(rutaNombre, "utf8");
		let info = JSON.parse(BD);

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

		// Obtiene la BD
		const rutaNombre = path.join(__dirname, "../auxiliar/comics.json");
		const BD = fs.readFileSync(rutaNombre, "utf8");
		let info = JSON.parse(BD);

		// Elimina el registro y lo guarda
		info.filter((n) => n.marvel_id != marvel_id);
		fs.writeFileSync(rutaNombre, JSON.stringify(info));

		// Fin
		return res.json();
	},
	editar: (req, res) => {
		// Variables
		const datos = req.query;

		// Fin
		return res.json()
	},
};