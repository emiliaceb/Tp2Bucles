/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */

 let frase = "";
 
 do{
    palabraIngresada= prompt('Ingrese una frase')
    if(frase.length === 0){
        frase = palabraIngresada
    }
    else{
        frase= frase +'-'+ palabraIngresada
    }

    console.log(frase)
 }
 while(confirm('Desea continuar?'))

console.log(frase)
document.write(`Frase Ingresada: ${frase}`)