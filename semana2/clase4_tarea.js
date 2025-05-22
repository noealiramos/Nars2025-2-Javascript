//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

<<<<<<< HEAD
const { ask } = require('../helpers/input');

// Función principal de análisis
function analizarCalificaciones(calificaciones) {
  let aprobados = 0;
  let reprobados = 0;
  let suma = 0;
  let mayor = calificaciones[0];
  let menor = calificaciones[0];

  for (let i = 0; i < calificaciones.length; i++) {
    const nota = calificaciones[i];
    suma += nota;

    if (nota >= 70) {
=======
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

function obtenerAprobados(numeros) {
  let aprobados = 0;
  let reprobados = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 70) {
>>>>>>> 8763d57f7a78d97844456ed2ef0c4c4d8186b340
      aprobados++;
    } else {
      reprobados++;
    }
<<<<<<< HEAD

    if (nota > mayor) mayor = nota;
    if (nota < menor) menor = nota;
  }

  const promedio = suma / calificaciones.length;

  return {
    cantidadAprobados: aprobados,
    cantidadReprobados: reprobados,
    promedioGeneral: promedio,
    calificacionMasAlta: mayor,
    calificacionMasBaja: menor
  };
}

// 🧪 Función de prueba
async function main() {
  const calificaciones = [95, 40, 70, 88, 63, 100, 58, 79];

  console.log("\n📊 Análisis de calificaciones:");
  console.log(`Calificaciones: ${calificaciones.join(', ')}`);

  const resultado = analizarCalificaciones(calificaciones);

  console.log(` Cantidad de aprobados: ${resultado.cantidadAprobados}`);
  console.log(` Cantidad de reprobados: ${resultado.cantidadReprobados}`);
  console.log(` Promedio general: ${resultado.promedioGeneral.toFixed(2)}`);
  console.log(` Calificación más alta: ${resultado.calificacionMasAlta}`);
  console.log(` Calificación más baja: ${resultado.calificacionMasBaja}`);
}

main();
=======
  }
  return { aprobados, reprobados };
}

function analizarCalificaciones(calificaciones) {
  const res = obtenerAprobados(calificaciones);
  let aprobados = res.aprobados;
  let reprobados = res.reprobados;
  let promedio = obtenerPromedio(calificaciones);
  let califAlta = obtenerMayor(calificaciones);
  let califBaja = obtenerMenor(calificaciones);

  return { aprobados, reprobados, promedio, califAlta, califBaja };
}

async function main() {
  const calificaciones = [90, 89, 34, 45, 67, 89, 23, 12, 45, 89, 8, 90]
  const resultado = analizarCalificaciones(calificaciones);
  console.log(resultado);

}

main();
>>>>>>> 8763d57f7a78d97844456ed2ef0c4c4d8186b340
