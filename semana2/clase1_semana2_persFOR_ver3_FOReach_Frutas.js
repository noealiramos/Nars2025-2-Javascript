const { ask } = require('../helpers/input');

function saludar(nombre){
  console.log("Hola estimado(a): "+ nombre);
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
  console.log("---------------");

  console.log("foreach"); //aquí siempre es de 1 en 1 "cdda uno", y sólo funciona en orden ASCENDENTE
  personas.forEach((persona) => saludar(persona)); //arrow function "=>", sin escribri el nombre de la funcion
  //ventajas foreach = es más compacto y va al grano

  const frutas = ["Fresas","Mango","Kiwi","Manzana","Uvas"]
    const cajon = Number(await ask("¿Qué cajón quieres abrir? (1-5): "));
    for(let j=1; j<=5; j++){
      if(j === cajon){
        console.log("En el cajón # ",cajon, ", hay: ",frutas[j-1]);
      }
    }




}
main();

      //for (inicialización; condición; actualización) {
      // Código que se ejecuta en cada iteración
      //}
