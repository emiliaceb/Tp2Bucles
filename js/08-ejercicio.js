/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario 
(no mayor de 50) 

1
12
123
1234
12345
123456
…… */
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

for (i = 1; i <= numero; i++) {
    for (let j = 1; j <= i; j++) {
        document.write(j);
    }
    document.write('<br>');
}

