// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function diffDays(actualDate,birthDate){
    const diff = actualDate - birthDate;
    const edadEnDias = Math.floor(diff / (1000*60*60*24 ) );//diff da el dato en milisegundos entre una y otra fecha. Nota: el Math.floor es para redondear
    
    //const annos = edadEnDias / 365; está MAL
    return edadEnDias;
    

}


async function main() {

    //const birthDateMonth = await ask("Cuál es tu fecha de nacimiento (formato dd/mm/yyyy)");

const actualDate = new Date(); //fecha y hr ACTUAL

const birthDateDay = await ask("Cuál es tu día de nacimiento: ");
const birthDateMonth = await ask("Cuál es tu mes de nacimiento: ");
const birthDateYear = await ask("Cuál es tu año de nacimiento: ");

const birthDate = new Date(`${birthDateYear}-${birthDateMonth}-${birthDateDay}`); 
//el guion invertido se puede sacar con ALT+96

//const diff = actualDate - birthDate;

//console.log(actualDate.toLocaleString());
//console.log(birthDate);
//console.log(diff);

console.log("Haz vivido aprox: ");
console.log(`${diffDays(actualDate,birthDate)} días`);
//console.log("Lo cual es aprox: "+ Años);

}

main();