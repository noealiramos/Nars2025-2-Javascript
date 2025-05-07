// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input');

async function main() {
  const num1 = Number(await ask('Ingresa el primer número: '));
  const num2 = Number(await ask('Ingresa el segundo número: '));

  const suma = num1 + num2;
  // TODO: Implementar la resta, multiplicación y división

  //se puede usar let o var - el estandar actual es let para variables. Const - es para constantes
  var resta = num1 - num2; 
  var multiplicacion = num1 * num2; 
  var division = num1 / num2; 

  console.log('La Suma = ', suma);
  // TODO: Mostrar el resultado de la resta, multiplicación y división

  console.log('La Resta es = ', resta);
  console.log('La Multiplicación es = ', multiplicacion);
  console.log('La División es = ', division);
}

main();
