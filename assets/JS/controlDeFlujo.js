console.log("Hola, Genereation");
/*
Cuando hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa(arriba/abajo, izq/der) estas instrucciones pueden ser una función un console.log, un ciclo, etc.

la importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas instrucciones dependiendo de una condicional (un elemento o instrucción detonante)


//Condicionales
son palabras reservadas que nos permiten evaluar si una condición se cumple o no, bajos ciertos criterios. las respuestas o salidas esperadas siempre partiran de un true o false

If nos sirve para validar si una condicion se cumple o no. Si se cumple, entoncesejecutamos un bloque de código que está dentro del if. si no se cumple, entonces no hacemos nada.
Nota: es la condicional más sencilla, pero la más limitante porque solo nos da una opción.

if(condicion){
    //bloque de codigo que se ejecuta si la condición es verdadera()


    //ejemplo: Felipe va a ir una fiesta y necesita tener su camisa favorita limpia para poder ir 
}

if (camisaLimpia=true){
    console.log("Felipe va a la fiesta");
}*/
/*
else (de otro modo, de lo contrario, si no)


if(condición detonante){
    //bloque de codigo que se ejecuta si la condicion es verdadera
}else{//bloque de código que se ejecuta si la condición es falsa
}


if (camisaLimpia=true){
    console.log("Felipe va a la fiesta");
}else{
    console.log("Felipe se queda en su casa a hacer lloración")
}*/
/*
else if

Esta condición nos ayuda a jugar con más opciones y más detonantes, para tener muchas posibilidades en el mismo código. para lograr estro vamos a unir el else con el if

if(condicion detonante){
//bloque de codigo si la condición es verdadera

}else if(condición detonante 2){
    //bloque de código si la condición 1 es falsa y la condición 2 es verdadera
}else{
    //coloque de codigo si las dos condiciones son falsas
}



*/
//ejemplo2: Felipe tiene hambre, y quiere comer chilaquiles verdes
/*
if (hambre = true){
console.log("Felipe va a comer");
}else if(chiaqiles= verdes){
console.log("Felipe come chilaquiles")
}else{
    console.log("Felipe no come y se pone triste");
}
/*
switch (cambiar o intercambiar/segun sea el caso)

Esta condicional nos permite hacer multiples operaciones y tomar las decisiones en función de las opción deseada (estado de la variable) 

Evalua una expresion comparando el valor de una variable con la expresión o caso, y ejecuta las declaraciones asociadas con ese caso, aspi como los casos que siguen 

expresióncon un valor

switch(expresion){
case 1:
    //bloque de código que ejecuta si la opciónseleccionada es igual a 1
break;
case 2:
    //bloque de código que ejecuta si la opciónseleccionada es igual a 2
    break;
    case 3:
    //bloque de código que ejecuta si la opciónseleccionada es igual a 3
    break;
    default:
        //Bloque de código que se ejecuta si ninguna opción coincide
        //no necesitas el break por que es la ultima opción
    }


*/
/*

let pisoSwitch= prompt("A que piso vas");
switch(pisoSwitch){
    case "1":
        console.log("llegamos al piso 1");
        break;
        case "2":
            console.log("llegamos al piso 2");
            break;
            case "3":
        console.log("llegamos al piso 3");
        break;
        default: console.log("opción no valida");
        
            
}
*/
//*** */
//Funciones aplicables a un consultorio dental 

//función calcular costo de consulta

let tipoServicio;
let tiempoconsulta;
let emergencia;
let promocion;


function generarCita(){
    let nombre=prompt("Hola, ingrese su nombre completo: ");
    let edad=prompt("ingrese su edad: ");
    let fechaCita=prompt("Ingrese la fecha deseada de su cita");
    let horaCita=prompt("ingrese la hora en la que desea asistir ");

    if(nombre!=undefined && edad!=undefined  && fechaCita!=undefined ){
        console.log("Muchas gracias " +nombre + " su cita quedo registrada para el " + fechaCita +" en el horario de " + horaCita);
    }
    if (edad<17){
        console.log("Para poder ser atendido necesitas ir acompañado de un adulto con identificación oficial");
    }else{ 
        console.log("No olvides traer tu identificación oficial ");}

}           
generarCita();