const dotEnv = require("dotenv");
const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { request, response } = require("express");
const cors = require("cors");
const logger = require("morgan");
const app = express();
const prism = new PrismaClient();
const path=require('path')

//Ruta para imagenes
global.__basedir = __dirname;

//---Archivos de rutas---
const facturaRouter = require("./routes/facturaRoutes");
const facturaAdministradorRouter = require("./routes/facturaAdministradorRoutes");
const productoRouter = require("./routes/productoRoutes");
const servicioRouter = require("./routes/servicioRoutes");
const sucursalRouter = require("./routes/sucursalRoutes");
const citaRouter = require("./routes/citaRoutes");
const usuarioRouter = require("./routes/usuarioRoutes");
const fileRouter = require("./routes/fileRoutes")
const horarioRouter = require("./routes/horarioRoutes");
// Acceder a la configuracion del archivo .env
dotEnv.config();
// Puero que escucha por defecto 300 o definido .env
const port = process.env.PORT || 3000;
// Middleware CORS para aceptar llamadas en el servidor
app.use(cors());
// Middleware para loggear las llamadas al servidor
app.use(logger("dev"));
// Middleware para gestionar Requests y Response json
app.use(express.json());
app.use(
express.urlencoded({
extended: true,
})
);
//---- Definir rutas ----
app.use("/factura/", facturaRouter)
app.use("/facturaAdministrador/", facturaAdministradorRouter)
app.use("/producto/", productoRouter)
app.use("/servicio/", servicioRouter)
app.use("/sucursal/", sucursalRouter)
app.use("/cita/", citaRouter)
app.use("/usuario/", usuarioRouter)
app.use("/file/", fileRouter)
app.use("/horario", horarioRouter)


//Acceso a las imagenes
app.use("/images", express.static(path.join(path.resolve(),"/assets/uploads")));

// Servidor
app.listen(port, () => {
console.log(`http://localhost:${port}`);
console.log("Presione CTRL-C para deternerlo\n");
});