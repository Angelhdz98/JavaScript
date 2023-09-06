//Repaso de funciones
/*
una función en un bloque de código que realiza una tarea especifica cuando se llama
* cada función de JavaScript en almacenado como un object function
 */


function saludar(){
    console.log("Hola soy una función ");
}

saludar();
/** * Las funciones son simplemente objetos especiales con la capacidad adicional de ser invocados (llamados como funciones). Esto significa que puedes asignar funciones a variables, pasarlas como argumentos a otras funciones y devolver funciones desde otras funciones. Esto facilita la creación de funciones de orden superior, como funciones de devolución de llamada y funciones que generan otras funciones. */
/*Declarar funciones
La palabra reservada function, que no indica que estamos definiendo una función.
*El nombre de la función, dependiendo de la acción a realizar 
*Un par de parentesis () después del nombre puede contener los parametros de entrada que en el caso actual no hay ninguno
*Seguido de un par de llaves {} para cerrar el bloque de codigo 
*Dependiendo de las instrucciones dentro del cuerpo de la fucnion y del próposito de misma, se determina si la función retorna un valor o no  

*/
//Llamamos una función y le vamos almacenar un resultado

function suma(a,b){
    return a+b;
}

console.log(suma);
var resultado=suma(5,3);
console.log(resultado);

function saludoNombre(nombre){
console.log("hola, "+nombre+"!");
}
//Llamamos a la función para saludar a alguien
saludoNombre("pepe")
/** * La funcion saludar toma un argumento (nombre) y muestra un mensaje en la consola. Aunque la función no devuelve un valor explícitamente con return, realiza una acción (mostrar un mensaje) cuando se llama. */

/*hoisting
Es fundamental en el entendimiendo de la forma en que se ejecuta nuestro código de JS, esto aplica tanto para variables como para funciones. Como tal, la traducción de Hoisting es levación, a partir de aquí, su entendimiento es mucho más intuitivo, o que hace a grander rasgos es "elevar" las funciones y variables declaradas dentro del codigo. 
*Yo puedo invocar una función antes de siquiera declararla
*/

console.log(miVariable);
var miVariable = "hola"; //no da error pero imprime undefined


var mensajeGlobal="esta es una variable global";
function funcionConVariableLocal(){
      console.log(mensajeGlobal);
}

//funciones anonimas//
/*
Estas funciones pueden ser declaradas sin un nombre y luego asignadas a variables o pasarse como parametros en otras funciones la diferencias prinicipal de estas funciones es que declaran sin un nombre
*/
const saludo= function(){
    console.log("Hola vida");    
}
saludo();
/*//Funciones flecha//
son una fomra mas concisa de definir funciones anonimaa. se le llama flecha debido a su sintaxis que utiliza (=>)
*Básicamente, se trata de reemplazar la palabra function y añadir => antes de abrir nuestras llaves
*/
const resta= (a,b)=> a-b;
console.log(resta(5,3));
/* esta función flecha es una forma más corta de: 
const resta= function(a,b){
    return a-b;
}

*/


