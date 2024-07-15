/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. */

//la funcion Math.max()se puede utilizar para encontrar el valor más bajo o más alto en una lista de argumentos:

const edades = [];
const nombres = [];
let posicion= 0;

for(let i=0; i<3; i++){
  edades.push(parseInt(prompt(`Ingrese una edad`)));
  nombres.push(prompt(`Ingrese el nombre`));
} 

console.log(edades);
console.log(nombres);

let edadMayor = Math.max(...edades); // Usamos el operador de propagación para pasar los elementos del array como argumentos
for( let i=0;i<edades.length;i++){
  if(edades[i] === edadMayor){
    posicion = i;
  }
  else{

  }
}
console.log(posicion);
document.write(`La mayor edad ingresada es ${edadMayor} y corresponde a ${nombres[posicion]}`);


 