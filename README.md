> Brandon Henao


## Advertencia de rendimiento
El despliegue se encuentra en un entorno gratuito y por tanto limitado. Pueden haber retrasos en las respuestas o peticiones http perdidas.


## Herramientas
- Visual studio code


## Tecnologías
- Pusher
- Node
- nodemon (cuando se esta en modo desarrollo refresca los cambios realizados al instante, sin necesidad de para el servidor y volver a subirlo)
- [![express-validator](https://express-validator.github.io/docs/custom-error-messages.html)] (validar las entradas de los parametros)
- cors
- link-module-alias, para rutas absolutas
- typescript




## Comandos
- npm init , para iniciar el proyecto node
- npm install , install todas las dependencias
- npm run postinstall , para instalar **link-module-alias**
- npm run build , construye en una carpeta dist de la aplicacion en **.js**, esta es ignorada por el **.gitignore** ,por lo tanto es necesario ejecutar este comando si quieres ejecutar el proyecto con .js
- npm run start , ejecuta la aplicacion con archivos de extension **.js** en una carpeta llamada **/dist** , antes de ejecutar este comando se debe ejecutar **npm run build**
- nodemon server.js  , para poner en funcionamiento el proyecto -> starting `ts-node dist/server.js` es requerido haber jecutado con anteriorida el comando **npm run buid** 
- nodemon src/server.ts  , para poner en funcionamiento el proyecto -> starting `ts-node src/server.ts`


## Configuracion
- 