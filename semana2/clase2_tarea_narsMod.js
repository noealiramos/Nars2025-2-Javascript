// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú: "OK"
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const { ask } = require('../helpers/input');

function imprimir(valorDei,nombreDeVariable){
  console.log(valorDei,nombreDeVariable);
}


async function main() {
  let opcion = '';
  let frutas = [];

  while (opcion !== '4') {
    opcion = await ask("¿Qué quieres hacer? \n1. Agregar fruta \n2. Eliminar fruta \n3. Ver la lista de frutas \n4. Salir: ");

    if (opcion === '1') {
      let frutaNueva = await ask("Escribe el nombre de la fruta que deseas agregar: ");
      frutas.push(frutaNueva);
      console.log(`*Fruta agregada exitosamente: ${frutaNueva}`); //alt+96 para la comita invertida
      console.log(`*Frutas existentes: ${frutas}`);
      console.log("---------------------------------------");

    } else if (opcion === '2') {
      if (frutas.length === 0) {
        console.log('No hay frutas disponibles');
        continue;
      } else {
        let frutaAEliminar = await ask('¿Qué fruta quieres eliminar? ');
        let index = frutas.indexOf(frutaAEliminar);

        if (index !== -1) {
          frutas.splice(index, 1);
          console.log(`*La fruta ${frutaAEliminar} ha sido eliminada!!!`);
          console.log("---------------------------------------");
        }

        console.log(`*Frutas actuales: ${frutas}`);
        console.log("---------------------------------------");
      } 
    } else if (opcion === '3') {
      console.log('Va la lista actual de frutas existentes: ');
      console.log("---------------------------------------");
       for (let i=0; i<frutas.length; i++){
        imprimir([i],frutas[i]);
  }

      console.log("---------------------------------------");
    }  else if (opcion === '4') {
      console.log('Gracias por usar el programa. Tus frutas fueron: ', frutas);
      console.log("---------------------------------------");
    } else {
      console.log('Opción no permitida. Intenta de nuevo');
    }
  }
}

main();