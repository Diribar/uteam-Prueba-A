"use strict";

// Servidor
global.express = require("express");
const app = express();
app.listen(80, () => console.log("Servidor funcionando..."));

// Requires
global.path = require("path");

// Carpeta de formatos
const carpetaFormatos = path.join(__dirname, "publico/formatos");
app.use("/formatos", express.static(carpetaFormatos));
const carpetaJS = path.join(__dirname, "publico/javascript");
app.use("/javascript", express.static(carpetaJS));

// Vistas
app.set("view engine", "ejs"); // Terminación de los archivos de vista
app.set("views", ["./vistas"]);

// Ruteador
app.use("/", require("./rutasContrs/ruta"));
