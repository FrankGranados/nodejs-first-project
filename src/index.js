/*=================================================
Imports*/

import express from "express";
import { dirname, join } from "path"; // dirname Obtiene el directorio de una ruta, join concatena rutas sin problemas de OS
import { fileURLToPath } from "url"; //Obtiene y decodifica la url de un archivo

import indexRoutes from "./routes/index.js";

/* "ejs" es un framework con integracion a express, por lo que no es necesario importarlo.
ejs es un motor de plantillas para integrar código en los html. Dentro de la carpeta de views tenemos las
paginas que renderizamos en nuestro server, y en la carpeta partials estan los elementos que se repetiran en diferentes
paginas. Con ejs podemos tener una navegacion y un footer en cada pagina sin necesidad de reescrbir el código.
*/

/*=================================================
App*/
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url)); //Obtiene la ruta absoluta del archivo

/*=================================================
Settings*/

app.set("views", join(__dirname, "views")); //Indica la ruta absoluta de la carpeta views
app.set("view engine", "ejs"); //Indica el view engine que en este caso es ejs
app.use(indexRoutes); //Usa el archivo importado de rutas
app.use(express.static(join(__dirname, "public") )); //Indica la carpeta de archivos estaticos (css)

/*=================================================
Routing*/
/*Normalmente aqui estarian las rutas de express, pero con el fin de tener un código mas limpio estas rutas se importan de un modulo.
usando la linea app.use(indexRoutes), traemos las rutas de un archivo externo que esta en la carpeta "routes" */

/*=================================================
Server*/
app.listen(process.env.PORT || 3000);
console.log("Server is listening on port", process.env.PORT || 3000);
