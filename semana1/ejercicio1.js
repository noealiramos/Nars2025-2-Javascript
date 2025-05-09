// Clase 1: ¿Qué es programar? + Variables y Tipos de Datos

const { ask } = require('../helpers/input');

async function main() {
  const name = await ask("¿Cómo te llamas? ");
  const age = Number(await ask("¿Cuántos años tienes? "));
<<<<<<< HEAD
  // TODO : Agregar pregunta para comida favorita
  const comida = await ask("¿Cuál es tu comida favorita? ");


  console.log("Hola " + name + ", tienes " + age + " años.");
  console.log("y tu comida favorita es "+ comida);
=======
  const comida = await ask("¿Cuál es tu comida favorita? ");
  console.log("Hola " + name + ", tienes " + age + " años, y tu comida favirita es: " + comida);
>>>>>>> 1aaf109bdf653f5bd2afbc485ab48bd7245a7274
}

main();