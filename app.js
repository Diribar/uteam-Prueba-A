"use strict";

// Servidor
global.express = require("express");
const app = express();
app.listen(80, () => console.log("Servidor funcionando..."));

// Requires
global.path = require("path");
require("dotenv").config();
global.fetch = require("node-fetch");

// Carpeta de formatos
const carpeta = path.join(__dirname, "publico");
app.use("/publico", express.static(carpeta));

// Vistas
app.set("view engine", "ejs"); // Terminación de los archivos de vista
app.set("views", ["./vistas"]);

// Ruteador
app.use("/", require("./rutasContrs/ruta"));
