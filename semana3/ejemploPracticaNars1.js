
const { ask } = require('../helpers/input');

async function main() {

  const alumno = {
  nombre: "Ali",
  edad: 43,
  calificacion: 90,
  mostrarInfo: function () {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años, y me saqué ${this.calificacion} puntos`); 
    //  this hace referencia a "alumno"
  }
};

alumno.mostrarInfo(); // Hola, soy Ali y tengo 43 años, y me saqué 90 puntos


}

main();