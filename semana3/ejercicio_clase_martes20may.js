// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

//el objeto alumno se va a guardar en un array, y cada objeto tendrá sus claves

const { ask } = require('../helpers/input');



function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;

  return promedio;
}

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}




async function main() {
  let opcion = 0; //para el while
  const alumnos = [];

  while(opcion !==3){
    opcion = Number(await ask(`Selecciona la opcion deseada \n1: Agregar Alumno: \n2: Mostrar resultados: \n3: Salir: `));
    if(opcion === 1){
      const nombre = await ask(`Introduce el nombre del alumno: `);
      const edad = await Number(ask(`Introduce la edad: `));
      const calificacion = await Number(ask(`Introduce la calificacion: `));
      alumnos.push({nombre,edad,calificacion}); //agregar los elementos al cajón


    } else if(opcion===2){
      const calificaciones =[];

      for (let i=0; i < alumnos.length; i++){
          calificaciones.psuh(alumnos[i].calificacion); //estamos guardando en el cajón la calificacion
      }
      console.log(analizarCalificaciones(calificaciones));

    } else {
      console.log("Opción inválida");
    }

  }

}

main();