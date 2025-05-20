
const { ask } = require('../helpers/input');

async function main() {

//espacio para modificar

const alumnos = [];
const alumno = {
  nombre: "Ana",
  edad: 19,
  calificacion: 85
};

alumnos.push(alumno);

console.log(alumnos);

//resultado esperado:
// [ { nombre: 'Ana', edad: 19, calificacion: 85 } ]


//notas: Porque permite guardar muchos objetos tipo alumno en un solo arreglo. Luego puedes recorrer ese arreglo con un for, forEach, etc., para analizarlos, mostrarlos, filtrarlos, etc

//modificar hasta aquí
}

main();