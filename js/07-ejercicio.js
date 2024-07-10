/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario 
(no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */

let numero = 0;
do{
 numero = parseInt(prompt('Ingrese un numero entero y menor a 50'));
    if(numero>50){
    alert('El numero excede los 50, porfavor vuelva a ingresar un numero mas pequeño')
    }
    else{
    if(isNaN(numero) || numero===''){
        alert('Numero invalido, ingrese nuevamente')
    }else{

    }
    }
    
}
while(numero>50 || isNaN(numero) || numero===''){
}

for (let n = numero; n >= 1; n--) {
    for (let i = 0; i < n; i++) {
        document.write(n);
    }
    document.write('<br>');
}
 

