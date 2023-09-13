/**
 Un arrar es un conjunto de datos que se puede almacenar en una sola variabnle. un arreglo es una estructura de datos que podemos definir como una colección de variables (que pueden ser diferentes, pero con mismo contexto)
 */
//variables que están sueltas
let nombre= "pepe";
let edad= 31;
let puesto="instructor"

// usar un array (arreglo) para "juntar" nuestras variables la manera en la que JS se da cuenta que es un arreglo es por el uso de corchatos 

let personasDeLaCH31=["Felipe", "José Ángel","Marco", "Alejandro"];
let cosasRandom=["pelota", 31,true, undefined, null];//podemos hacer arreglos que contenga distintos tipos de datos 
//un array es un objeto tiene ciertas propiedades y ciertos metodos.
//lo sobjetos tienen sus metodos por contexto por ejemplo noo podemos encontrar el metodo volar en un gatito 
//todos los arreglos son objetos, sin importar si alvergan datos del mismo tipo o no 
//Ya qye tengo mi arreglo, como podemos acceder a esa información?
//para motrar la cantidad de elementos que tengo en un arreglo, usamos un metodo llamado length
console.log(personasDeLaCH31.length);

//la sintaxis para entrar al metodo es objeto.metodo

// no es lo mismo el index y la cantidad de elementos, ya que el indice inicia desde el cero ya que para la computadora el 0 es muy importante
//hay 5 elementos y su indice de posción van del 0 al 4     

//otra forma de declarar un arreglo
//let array = new Array [];
//instaciar un objet

console.log(personasDeLaCH31[25]);//no da error pero arroja un undefined
//A partir de el quinto elemento guarda espacio para otros elementos.

//declaramos una variable donde alojaremos el valor del indce
let index=4;
console.log(personasDeLaCH31[index])

//Ejemplo de un array para un consultorio dental
let pacientes=[];
let dentista=["Dr. Smith","Dra. García", "dr.House","Dr. Simi" ];

dentista[3]="similares";
console.log(dentista[3]);
dentista[8]="Dr. strange";
console.log(dentista);

//para separa los temas puede utilizar una función que imprima algún caracter como separacación

function imprimirAsteriscos(){
    console.log("******************************************");
}
imprimirAsteriscos();

//metodos de array
let listaDelSuper=["gansitos","Cocas", "Arroz", "atún","verduritas"];

//metodo length para conocer la longitud del arrray
console.log("La cantidad de elementos de mi array es de ", + listaDelSuper.length);

//Método push() para poner elementos al final de mi array
listaDelSuper.push("jabón para ropa","jabón para trastes");

console.log(listaDelSuper);
//metodo pop() para eliminar elemento del final del array
listaDelSuper.pop();//siempre debe de llevar parentesis ya que es unafunción 
console.log(listaDelSuper);
//tenemos metodos para agregar valores al final al incio o en medio, pero si agregamos algo en medio o al final todos los indices cambian para JS(se eejecuta desde el lado del cliente) no le importa los recursos que eso necesite pero Java no deja hacer eso  
// osea que el arreglo inconsistente

//Agregar un elemento al principio del array con metodo unshift()
listaDelSuper.unshift("sabritones");
console.log(listaDelSuper);

//Elimiar el primer elemento del array shift elimina el elemento al principio del array
listaDelSuper.shift();
console.log(listaDelSuper);


//Saber la posición de las verduritas
console.log(listaDelSuper.indexOf("verduritas"));
// no es lo mismo Verduritas que verduritas estos metodos son case sensitive

//metodo splice paa agregar, eliminar o reemplazar elementos
//nombreArreglo.splice(inicio, cantidadElementosAEliminar, elementoAInsertar1, elementoInsertar2)
/*
inicio: a partir de donde va a iniciar  a sobre escribir los elementos
cantidadDeElementosAEliminar: cuantos elementos se elimina
 
*/

console.log(listaDelSuper);
listaDelSuper.splice(2,0,"Cacahuates", "Manzana");//no borra nada y solo agrega valores 

console.log(listaDelSuper);
//eliminamos y modificamos

listaDelSuper.splice(5,2, "platano");
console.log(listaDelSuper);

//metodo .map()
let numeros= [1,2,3,4,5];

//crear otro arreglo con numeros multiplicados x2 [2,4,6,8,10]

//toma cada valor el arreglo y lo mete en la función 

let numerosPorDos=numeros.map(function(numero){
    return numero*2;
})
console.log(numeros);

console.log(numerosPorDos);


let pacientesConsultorio=[{
    nombre:"Felipe",
    edad: 31,
},
{
    nombre: "Fatima",
    edad: 26,
},
{
    nombre: "jesus",
    edad: 51,}];


    //Función para agregar el texto "Necesita atenión especial" 
    function agregarEstadoSalud(paciente){
        let estado="Saludable";


        //si el paciente tiene más de 40 anios 
        if(paciente.edad>40){
            estado="Necesita atención especial";
        }
        return{
            ...paciente,//Copia del paciente 
            estadoSalud:estado,//para agregar un nuevo campo o variable (como la edad o el nombre)

        }
    }



    //Vamos a aplicar la función en cada elemento del arreglo con el map
    let pacientesConsultorioConEstado=pacientesConsultorio.map(agregarEstadoSalud);//cuando la mandamos a llamar a partir del .map no necesitamos poner los parentesis

    console.log(pacientesConsultorio);
    console.log(pacientesConsultorioConEstado);


    //ejercicio carreritas

    let carreritasPosicionActual=[{pirmerLugar:"Roberto"},
                    {segundoLugar:"Andrea"},
                    {tercerLugar:"Jorge"},
                    {cuartoLugar:"Ramiro"},
                    {quintoLugar:"Sofía"}];//
    let posicionCarreritasIni=["Roberto","Andrea","Jorge","Ramiro","Sofia"];

    //jorge adelanta a roberto
    function carrera(posiciones){
        posiciones.unshift("Jorge");
        posiciones.unshift("Ramiro");
        posiciones.splice(2,3,);
        posiciones.push("José");

    }

    
    // Jorge adelanta roberto
    //ramiro adelanta a jorge
    //roberto se lesiona y se sale de la carrera
    //Ramiro mantiene su posición
    //el quinto lugar es remplazado por josé 


   // console.log(carreritasPosicionActual) //muy complicado no es asi
