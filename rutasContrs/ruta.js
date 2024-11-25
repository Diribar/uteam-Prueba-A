"use strict";

// Variables
const router = express.Router();
const contrVista = require("./contrVista.js");
const contrAPI = require("./contrAPI.js");

// Rutas - API - Listado de personas
// router.get("/api/edita-persona", contrAPI.editaPersona);
// router.get("/api/elimina-persona", contrAPI.eliminaPersona);
// router.get("/api/agrega-persona", contrAPI.agregaPersona);
// router.get("/api/buscador-personas", contrAPI.buscadorPersonas);

// Rutas - API - CRUD
router.get("/api/agregar", contrAPI.agregar);

// Rutas - Vista
router.get("/", contrVista.inicio);
router.get("/listado-de-comics", contrVista.listadoComics);
router.get("/alta-de-comics", contrVista.altaComics);

// Fin
module.exports = router;
