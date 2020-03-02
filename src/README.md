# random-messages-jm

Whenever I start a new project, I don't know what to write for the first commit. After doing a “git init” there is technically nothing there...

## Install

```npm
npm i -g random-messages-jm
```

# Usage

```bash
random-msg
```

# Contributing
If someone wants to add or improve something, I invite you to collaborate directly in this repository: [random-messages-jm](https://github.com/platzi/npm-random-msg)

# License
random-msg is released under the [MIT License](https://opensource.org/licenses/MIT).

// primero inicializar con git init
//despues iniciiar npm init
//atajos para crear package.json -> Generar un documento automatico npm init -y
->npm set init.author "Ricardo"
->npm set init.licence "MIT"
->npm set init.email "email@gfds"
->despues npm init -y
 , son funcionalmente como git --config…
Tener listos nuestros datos de Dev al momento de hacer Publish/Deploy

// paquetes para manejar fechas en js ->moment,date-fms
npm install monent
npm install monent date-fms  

shortcut -> npm i monent -S
            npm i monent date-fms -D 
            :-> -D de depemdencia de desarrollo
            :-> -S de depemdencia de parte del proyecto 
            :-> -g de depemdencia de desarrollo global
            :-> -O de depemdencia de desarrollo opcional

npm i -g nodemon genera un demonio que es un escuchador de cambios o valor en nuetro proceso de node y lo  dejara de mantener 

npm  i slint -O

Comando para revisar los packages instalados de forma global:
 npm list -g --depth 0

// Demonio: Servicio que corre en segundo plano en el sistema

// con npm react --dry-run simula una instalacion de raact y genera un output

//npm i webpack -f o -force fuerza alguna instalacion desde la 
ultima version

ver paquetes instalados npm list


// actualizacion npm update

ver package desactualizados npm outdate,
ver  output de npm ->npm outdate --dd,

// npm install loquesea@

// elimanr npm uninstall json-server elimina todo
// 

// elimanr npm uninstall json-server elimina el pakete en node_module pero no el json

// Un pequeño resumen:

// Actualizar paquetes

//     Revisar que paquetes disponen de nuevas versiones
//     npm outdate
//     Para ver un output más detallado
//     npm outdate --dd

//     Actualizar los paquetes que no están en la ultima versión
//     npm update

//     Actualizar un paquete especifico
//     npm install json-server@latest

// Eliminar paquetes

//     Eliminar un paquete de node_modules y del archivo package.json
//     npm uninstall json-server

//     Desinstalar un paquete de todo node_modules pero no del archivo package.json
//     npm uninstall webpack --no-save


// versionado semantico
// sacando este simbolo ^ garantiza q nuetra version del packete se mantenga
// package-look.json controla las versiones de los paquetes y para integracion continua
// este simbole - , ~bug fixed cambios menores

git clone https://github.com/gndx/react-base.git && cd react
-base
seccion scripts  son comandos q podemos establecer para ejecutar desde la consola nos dara unas series de salidas segun configuremos

solcuion de problemas activar verbose con --dd
eliminar cacge npm cache clean --force

eliminar carpeta rm -rf node_modules

inslar para eliminar de forma segura npm install -g rimraf 
luego elinnicar la carpeta con rimraf node_modules

seguridad:analizar proyectos 
npm audit
npm audit -- json genera un json
npm update audit fix

actualizar un paquete con profundidad 2

probar paquetes npm localnente
npm link -f
llamar a la funcion random-msg

otra forma de actualizar cambios  con la ruta
~/Documents/Platzi/GestionDeDependenciasYpaquetesConNpm/random-messeges

añadir usuario para subir paquetes: npm adduser