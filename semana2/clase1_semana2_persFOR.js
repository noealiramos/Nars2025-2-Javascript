const { ask } = require('../helpers/input');

function saludar(nombre){
  console.log("Hola estimado(a): " + nombre);
}

async function main() {
  const personas = [
    "Pedro",
    "Juan",
    "Maria",
    "Ana",
    "Karla",
    "Sofia",
    "Carlos",
    "Estebarn",
    "Fermando",
    "Laura",
    "Carolina"
  ];

  for (let i=0; i<personas.length; i++){
    saludar(personas[i]);

  }


}
main();