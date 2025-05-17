// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {
  let opcionAElegir = '';
  let arrayEdades = [];

  while (opcionAElegir !== '4') {
    opcionAElegir = await ask("Instrucciones: Script para ingresar x cantidad de edades, y para evaluar si pueden votar \n1. Ingresar las edades \n2. Consultar lista de edades \n3. Resultado quien puede votar \n4. Salir: ");

    if (opcionAElegir === '1') { // es texto el número ingresado
      let edadIngresadaTexto = await ask("Escribe la edad que deseas agregar: ");
      let edadNumerica = Number(edadIngresadaTexto); //convierte a número el string
      
      arrayEdades.push(edadNumerica); //push es un método de los arrays en JavaScript que agrega un nuevo elemento al final del arreglo.
      
      console.log(`*Edad adicionada: ${edadNumerica}`);
      console.log(`*Edades existentes: ${arrayEdades}`);
      console.log("---------------------------------------");

    } else if (opcionAElegir === '2') {
      if (arrayEdades.length === 0) {
        console.log('No hay edades registradas');
      } else {
        console.log(`*Edades actuales: ${arrayEdades}`);
      }
      console.log("---------------------------------------");

    } else if (opcionAElegir === '3') {
      let puedenVotar = arrayEdades.filter(edad => edad >= 18); 
                //.filter(edad => edad >= 18) crea un nuevo array con las edades válidas para votar
                //ojo: métodos comunes de arrays: push, pop, shift, filter
      
      console.log(`Total de personas que pueden votar: ${puedenVotar.length}`);
      console.log(`Edades que sí pueden votar: ${puedenVotar.join(', ')}`); 
                //  convierte ese array en una cadena separada por comas para que se vea más limpio
                
      console.log("---------------------------------------");

    } else if (opcionAElegir === '4') {
      console.log('Gracias por usar el programa. Tus edades fueron: ', arrayEdades);
      console.log("---------------------------------------");

    } else {
      console.log('Opción no permitida. Intenta de nuevo');
    }
  }
}

main();
