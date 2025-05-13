const { ask } = require('../helpers/input');

function saludar(nombre){
  console.log("Hola estimado(a): " + nombre);
}

async function main() {
  const personas = [ //array sencillo
    "Pedro 1",
    "Juan 2",
    "Maria 3",
    "Ana 4",
    "Karla 5",
    "Sofia 6",
    "Carlos 7",
    "Estebarn 8",
    "Fermando 9",
    "Laura 10 ",
    "Carolina 11"
  ];

  console.log("Ascendente");
  for (let i=0; i<personas.length; i++){
    saludar(personas[i]);
  }
  console.log("---------------");

  console.log("Descendente");
  for (let i=personas.length-1; i>=0; i--){ //personas -1 dado que tenemos que llegar al 0
    saludar(personas[i]);
  }

}
main();

      //for (inicialización; condición; actualización) {
      // Código que se ejecuta en cada iteración
      //}
