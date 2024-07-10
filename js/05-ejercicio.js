/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI 
(Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 
Input:  40773821 
Output: ‘L’ */

let dni = 0;
let operacion = 0;
const divisor = 23;
const T=1, R=2, W=3, A=4, G=5, M=6, Y=7, F=8, P=9, D=10, X=11, B=12, N=13, J=14, Z=15, S=16, Q=17, V=18, H=19, L=20, C=21, K=22, E=23;
do{
 dni = parseInt(prompt('Ingrese su DNI'))
 console.log(dni);
 operacion = dni % divisor;
 console.log(operacion)
 if(isNaN(dni) || dni === '' || dni<0 || dni>99999999 ){
    alert('No corresponde a un dni valido')
 }
 else{
    if(operacion==1){
        document.write(`Su letra del DNI es T`)
    }
    else{
        if (operacion == 0) {
            document.write(`La letra del DNI es T<br>`);
        } else if (operacion == 1) {
            document.write(`La letra del DNI es R<br>`);
        } else if (operacion == 2) {
            document.write(`La letra del DNI es W<br>`);
        } else if (operacion == 3) {
            document.write(`La letra del DNI es A<br>`);
        } else if (operacion == 4) {
            document.write(`La letra del DNI es G<br>`);
        } else if (operacion == 5) {
            document.write(`La letra del DNI es M<br>`);
        } else if (operacion == 6) {
            document.write(`La letra del DNI es Y<br>`);
        } else if (operacion == 7) {
            document.write(`La letra del DNI es F<br>`);
        } else if (operacion == 8) {
            document.write(`La letra del DNI es P<br>`);
        } else if (operacion == 9) {
            document.write(`La letra del DNI es D<br>`);
        } else if (operacion == 10) {
            document.write(`La letra del DNI es X<br>`);
        } else if (operacion == 11) {
            document.write(`La letra del DNI es B<br>`);
        } else if (operacion == 12) {
            document.write(`La letra del DNI es N<br>`);
        } else if (operacion == 13) {
            document.write(`La letra del DNI es J<br>`);
        } else if (operacion == 14) {
            document.write(`La letra del DNI es Z<br>`);
        } else if (operacion == 15) {
            document.write(`La letra del DNI es S<br>`);
        } else if (operacion == 16) {
            document.write(`La letra del DNI es Q<br>`);
        } else if (operacion == 17) {
            document.write(`La letra del DNI es V<br>`);
        } else if (operacion == 18) {
            document.write(`La letra del DNI es H<br>`);
        } else if (operacion == 19) {
            document.write(`La letra del DNI es L<br>`);
        } else if (operacion == 20) {
            document.write(`La letra del DNI es C<br>`);
        } else if (operacion == 21) {
            document.write(`La letra del DNI es K<br>`);
        } else if (operacion == 22) {
            document.write(`La letra del DNI es E<br>`);
        }
    }
 }
}
while(confirm('¿Desea continuar?')){

}