// Primero debo solicitar al usuario su número de tarjeta
var ingreso = prompt("Ingrese su número de tarjeta: ");
var numeroTarjeta = [];
var respuesta = ingreso.split('').reverse().join('');// Retorné los números de la tarjeta en orden inverso
for(var i = 0; i < respuesta.length; i++){
numeroTarjeta.push(parseInt(respuesta[i]));
}
console.log(numeroTarjeta);
function isValidCard(numeroTarjeta){ //Creo una función para saber si el número de tarjeta es válido
var nuevosDigitos = 0;
var total = 0;
for(var i = 0; i < numeroTarjeta.length; i++){
	if(nuevosDigitos.indexOf(0) === -1){
		
if(i % 2 !== 0){ // Aplicando el algoritmo de Luhn
  var multiplicacion = (numeroTarjeta[i]* 2);
if(multiplicacion >= 10){
  nuevosDigitos += (numeroTarjeta[0]) + (numeroTarjeta[1]);
 for(var j = 0; j < nuevosDigitos.length; j++){
   total += nuevosDigitos[i];
 if(total % 10 === 0){
   console.log(prompt("Tarjeta Válida"));
 }
 }
 }
  
}
  
}
}