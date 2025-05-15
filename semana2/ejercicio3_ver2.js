const { ask } = require('../helpers/input');

async function main() {
 
  const nombres2 = ["Oscar","Ana","Luis","Eduardo","Isabel","Maria","Úrsula","Pedro","Omar"];
  const vocales =["a","e","i","o","u","ú"];

  for(let index1=0; index1 < nombres2.length; index1++){
    const primeraLetra = nombres2[index1][0].toLowerCase(); //el [0] indica la posición INICIAL de IZQUIERDA A DERECHA
    for (let index2=0; index2 < vocales.length; index2++){
      if(primeraLetra === vocales[index2]){
        console.log(`* ${nombres2[index1]}, empieza con ${vocales[index2].toUpperCase()}`);
        }
    }
  }



 
}
main();