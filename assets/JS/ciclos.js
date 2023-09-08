//Expresiones
//ciclos matrices y arreglos 

/*
condiciones: alterar el orden natural del código 
estructura: Contralan la ejecución del código 


-ciclos o bucles (loops)

También conocidos como bucles, son estructuras de control que nos van a permiti ejecutar un bloque de codigo de forma repetida, hasta que su cumpla una condición específica
//
es importante usar ciclos para automatizar tareas repetitivas/
ciiclos:

-while
-do while
-for 

iterar: proceso de repetir una secuencia de instrucciones estructura de control: herramienta especial para crear algoritmos o programas más dinámicos y flexibles 

    -while: ejecuta un bloque de códgio mientras se cumpla una condición especifica este ciclo se repite mientras las condiciones sea verdadera, y el bloque de código se ejecuta siempre y cuando la condición se mantenga. la condición se evalúa antes de cada interacción

    while(condición){
        //código que se ejecuta
    }


*/


/*
while (miCruhMeQuiere){
    console.log("seré feliz")
}


//ejemplo de un consultorio dental 
let capacidadPacientes=50;
let pacientesEnConsultorio=15;
while(pacientesEnConsultorio<capacidadPacientes){
console.log("seguimos dando servicio")
pacientesEnConsultorio++;
}
*/
/*do while (hacer mientras) 

Realiza las lineas de codigo y después se revisa la condicion para que las instrucciones se ejecuten al menos una vez 
-sintaxis
 do{
    //código a ejecutar
 }while(condicion);


*/

/*var contadorPacientes =0;

do{
    var nombre= prompt("ingrese el nombre del paciente: ");
    if(nombre){
        contadorPacientes++;
    }
}while(confirm("desea registar otro paciente"));

console.log("numero total de pacientes: ", contadorPacientes)
*/
/********** 
 Bucle for
 se utiliza cuando conocemos el numero exacto de iteraciones que vamos a realizar 
 consiste de 3 partes fundamentales:
    - incialización: se ejecuta antes de que el bucle comience y se usa para establecer una variable de control (variable de incio)
    -Condición: es el detonante que verificamos antes de cada iteración, para saber si se sigue ejecutando o no (siempre y cuando sea verdaderad)
    -expresión de iteración (contador): tiene la finalidad de modificar la variable de inicio y poder tener un punto de cierre.

    for(inicialización; condición; ExpresiónDeIteración){
        //bloque de codigo a ejecutar 

    }
 */

    //crea un codigo que imprima los numeros del 0 al 4

    for(var i =0; i<5; i++){
        console.log(i)
    }


    //consultorio dental: registro de citas con un for 
    let cantidadDeCitasDiarias= 5;

    for (let i=1;i<=cantidadDeCitasDiarias;i++){
        var nombre =prompt("ingrese el nombre del paciente " + i)
        console.log("Paciente " +nombre+ " con cita "+ i );
    }//hay  que tener cuidado con el valor inicial y con la condición a cumplir 


    



    







