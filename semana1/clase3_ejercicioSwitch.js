const { ask } = require('../helpers/input');

async function main() {

  const number = Number(await ask ("Ingresa un numero que sea multiplo de 3 y/o 5: "));

  switch (true) {
  case number % 3 === 0 && number % 5 === 0:
    console.log("Es multiplo de 3 y 5");
    break;
  case number % 3 === 0:
    console.log("Es multiplo de 3");
    break;
  case number % 5 === 0:
    console.log("Es multiplo de 5");
    break;
    default:
      console.log("¡Lo siento, pero no es multiplo de 3 ni de 5!");
  }

}
main();
