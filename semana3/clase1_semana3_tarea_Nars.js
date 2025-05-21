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

async function main() {
  let alumnos = [];
  let continuar = 'y';

  while (continuar.toLowerCase() === 'y' ) { //inicio del while
    const nombre = await ask("Ingresa el nombre del alumno: ");
    const edad = parseInt(await ask("Ingresa la edad del alumno: "), 10); 
    const calificacion = parseFloat(await ask("Ingrese la calificación del alumno: "));
    //notas:
    //"parseInt" convierte el string a numero, el 10 es para indicar el sistema numerico decimal
    //"parseFloat" convierte también de string a número pero respeta los decimales

    const alumno = {
      nombre,
      edad,
      calificacion,
      mostrarInfo: function () {    
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Calificación: ${this.calificacion}`);
        console.log(this.edad >= 18 ? "Es mayor de edad" : "No es mayor de edad");
        console.log("---------------------------------------");
      }
    }; 
    //notas:
    // this  hace referencia al mismo objeto en el que se está ejecutando el código
    //es la forma tradicional de definir un método (una función dentro de un objeto)
    // operador ternario (? :): es como un "if", si se cumple la condición entonces "a", sino = "b"
    //tal cual un "if"
    // push() es un método de los arreglos en JavaScript que agrega un nuevo elemento al final del arreglo
    //OJO: "alumnos" es un arrelgo, "alumno" es un objeto
    //entonces, alumnos.push(alumno) agrega ese objeto alumno al final del arreglo alumnos

    alumnos.push(alumno);

    continuar = await ask("¿Deseas agregar otro alumno? (y / n): ");
  } //fin del while

  // Mostrar info individual
  console.log("\n=== Información de Alumnos ===");
  for (let i = 0; i < alumnos.length; i++) {
    alumnos[i].mostrarInfo();
  }

  // Estadísticas
  const aprobados = alumnos.filter(a => a.calificacion >= 70).length;

  const puedenVotar = alumnos.filter(a => a.edad >= 18).length;

  const promedio = alumnos.reduce((sum, a) => sum + a.calificacion, 0) / alumnos.length;

  const calificaciones = alumnos.map(a => a.calificacion);

  const calificacionMayor = Math.max(...calificaciones);

  const calificacionMenor = Math.min(...calificaciones);

  // Impresión en pantalla de estadísticas
  console.log("\n=== Estadísticas ===");
  console.log(`Total de alumnos: ${alumnos.length}`);
  console.log(`Aprobados (calificación ≥ 70): ${aprobados}`);
  console.log(`Pueden votar (edad ≥ 18): ${puedenVotar}`);
  console.log(`Promedio general de calificaciones: ${promedio.toFixed(2)}`);
  console.log(`Calificación mayor: ${calificacionMayor}`);
  console.log(`Calificación menor: ${calificacionMenor}`);
}

main();
