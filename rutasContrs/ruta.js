"use strict";

// Variables
const router = express.Router();
const contrVista = require("./contrVista.js");
const contrAPI = require("./contrAPI.js");

// Rutas - API - CRUD
router.get("/api/agregar", contrAPI.agregar);
router.get("/api/editar", contrAPI.editar);
router.get("/api/eliminar", contrAPI.eliminar);

// Rutas - Vista
router.get("/", contrVista.inicio);
router.get("/listado-de-comics", contrVista.listadoComics);
router.get("/alta-de-comics", contrVista.altaComics);

// Fin
module.exports = router;
