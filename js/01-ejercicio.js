/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
 si la edad ingresada no es un número válido indicarlo en un mensaje. */

 let edad = 0;
 do{
  edad = prompt('Ingrese su edad');
 }
 while(edad<0 || edad>150){
     
 }
 if(edad>0 && edad<150){
     if(edad>17 && edad<60){
         document.write(`Usted tiene ${edad}, ya puede conducir`);
     }
     else{
         document.write(`Usted tiene ${edad}, NO puede conducir`);
     }
 }