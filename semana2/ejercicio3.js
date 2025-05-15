const { ask } = require('../helpers/input');

async function main() {
 
  const nombres = ["Ana","Roberto","Luis","Mariana","Sol","Paco","Alvaro","Adriana","Pancho","Max"];
  
  
  const vocales =["a","e","i","o","u"];

  for (let index=0; index<nombres.length; index++){
    if(nombres[index].length>=5){
      console.log(`* ${nombres[index]}, tiene más de 5 caracteres.`);
    } else {
      console.log(`* ${nombres[index]}, tiene sólo ${nombres[index].length} caracteres.`);
    }
        }
    }
main();