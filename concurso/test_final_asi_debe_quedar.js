//asi debe quedar para subir>>>>>>>>>

const fs = require('fs'); //ESTE COMENTAR PARA "TRABAJAR"
//const { ask } = require('../helpers/input'); ESTE COMENTAR PARA SUBIR

async function main() {
  //const nombre = await ask("¿Cuál es tu nombre?"); ESTE COMENTAR PARA SUBIR
  const nombre = fs.readFileSync(0, 'utf8').trim(); //ESTE COMENTAR PARA "TRABAJAR"
  console.log("Hola " + nombre);

}

main();

