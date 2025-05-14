//OBJETIVO: imprimir números pares hasta al 100
//si lo hace en ascendente y en descendente

const {ask} = require('../helpers/input');

async function main(){

  const numeroPar = Number(await ask("¿Hasta qué numero par quieres contar?: "));  
  console.log("Va Ascendente con FOR:");  
  for (let i=2; i<=numeroPar; i=i+2){
    console.log(i);
  }

console.log("---------------");  

  console.log("Va Descendente con FOR: PENDINTE POR TERMINAR");  
  for (let i=numeroPar; i>=2; i=i-2){
    console.log(i);
 }
}
main();
