//Comentraio de una sola linea
/*comentarios
multilinea 
para 
secciones 
de código
*/
/*
alert("Hola mundo");
var frasco = "pastillas";
var frasco = "pasitas con chocolate";
var frasco = "pastillas";
var frasco = "shampoo";
console.log(frasco);
*/
//
/*Tipos de datos primitivos y no primitivos
string
number
boolean
undefined
null
symbol
object (No es primitivo )
S
*/
//String es una cadena de texto siempre debe de ir entre comillas dobles
var vaso ="leche"

//number, No lleva comillas y se refiere al numero con el cual podemos hacer operaciones matemáticas

var edadUsuario =10;

//boolean es un valor con solo 2 salidas true o false
var usuarioPremim = false;

//undifined variables sin inicializar, existe pero  no está definido
var proximaCita= undefined;

// null, es un valor que aún no tenemos definido

var asistenciaInvitado= null;

//variables para el consultorio

//Strings
var nombreUsuario= "Silverio Gaytan Uribe";
var correoElectronico="noquierocambiarmeaTelcel@gmail.com";
//Num
var edadUsuario=55;
var precioExtracción=1500;
var numeroTelefono="3324954210";
//boolean 
var clienteActivo=true;
var clienteRegistradoPublicidad=false;
// Undefined

var proximaCita=undefined;
var procedimiento=undefined;

//null
var confirmacionCita= null;
var confirmacionFacturacion=null;

//console.log(typeof(clienteActivo));
//typeof es una palabra reservada que nos ayuda a saber que tipo de dato es alguna variable

// diferencias entre var y let 
/*
var tiene un alcance global
mientras que let tiene un alcance local, solo la puedes utilizar en el scope donde la declaras

const es una variable que cuando se asigna el valor ya no la puedes cambiar


*/
//Cambiando el tipo de dato de una variable
var edad ="31";
var peso=80;
console.log(typeof(peso));
var peso=peso.toString();
console.log(typeof(peso));
console.log((peso.toString));



console.log(typeof(edad));
var edad=parseInt(edad);
console.log(typeof(edad));


console.log("Cambiando de string a number");
console.log(typeof(numeroTelefono));
var numeroTelefonoNumber= parseInt(numeroTelefono);
console.log(typeof(numeroTelefonoNumber));


console.log("Cambiando de number a string");
console.log(typeof(precioExtracción));
var precioExtracciónString = precioExtracción.toString();
console.log(typeof(precioExtracciónString));
