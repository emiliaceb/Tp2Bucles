/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let numero = '';
let suma= 0;
do{
    numero = prompt('Ingrese un numero')

    if(isNaN(parseInt(numero)) || numero===''){
        alert('numero invalido!!!!!!!')
    }
    else{
        suma += parseInt(numero)
    }
}
while(confirm('¿Desea seguir ingresando numeros?'))

document.write(`La suma de todos los numeros ingresados es ${suma}`)