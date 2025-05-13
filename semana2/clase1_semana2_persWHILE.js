const { ask } = require('../helpers/input');

async function main() {
  
  let limite = Number(await ask ("hasta que numero quieres contar: "));
  
  let i=0;
  
  while (i<=limite){
    console.log(i);
    i++; //i++ es lo mismo que=> i=i+1;
  }
  
  i=limite
  while (i>=0){
    console.log(i);
    i--; //i-- es lo mismo que=> i=i-1;
  }
}
main();