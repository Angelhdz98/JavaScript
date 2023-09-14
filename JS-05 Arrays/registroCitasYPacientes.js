/**
 * sistema para registrar pacientes y citas de estos pacientes, utilizando métodos de arrays
 * Lista de cosas por hacer/ cosas por tomar en cuenta
    -Un array para pacientes
    -Un array para citas

    -prompt para registrar los datos
    -Datos a registrar: nombre apellido, fecha, edad, hora, especialista
    -Función registrar paciente
    -Funcion registrarCita
    metodos para modificar los arrays(push(), each(), forEach())

 */
//la variable paciente está declara e inicializada (tiene un nombre, y tiene un valor a pesar de que su arreglo esté vacío)

//Lo indices del arreglo estan undefined porque no hay elementos pero si hay espaciós disponibles
    let pacientes=[];
    let citas=[];


    function registrarPaciente(nombre,edad){
        //Crear un array dentro de otro array

        let paciente= {
            nombre,
            edad,
            citas: [
                
            ]
            //el uso de ":" es porque ya estamos utilizando un = dentro de la misma sententencia (let paciente) se llama escape de caracteres
        };

    }
    
//Cuando ejecuta mi función, necesito un paciente, una hora y una fecha para registrar la cita
    function registrarCita(paciente, fecha, hora){
        //

        paciente.citas.push({
                        fecha,
                        hora
        }
        );
    }



    /*forEach

    Es un metodo de arrays que tiene como objetivo iterar y recorrer cada elemento del array con la finalidad de aplicarle una función establecida
    
    Generalmente el for each se utiliza para imprimir la información del arreglo
    sintaxis for Each


    array.forEach(function(elemento, indice, arreglo ));
    -elemento: el elemento actual del arreglo que se esta procesando
    -indice: la posición del elemento actual en el array
    -arreglo: el array que se esta recorriendo

        Ejemplo del supermercado
    -elemento:produco que compre y que está en el carrito
    -indice: la posición de ese producto
    -arreglo: carrito del super(opcional)

    


    */
    
    let carritoSuper=["manzanas","papitas", "huevo","jabon de trastes","pan"];

    carritoSuper.forEach(function(producto){
        console.log();
    })
    
    //función para mostrar la información del paciente con su cita
    function mostrarInformación(paciente){
    console.log("nombre del paciente: "+paciente.nombre);
    console.log("edad del paciente: "+paciente.edad);
    console.log("citas registradas: "+paciente.nombre);
}

//forEach() para imprimir citas
paciente.citas.forEach((cita, indice)=>{
    console.log("indice: ",+ indice+ "fecha: " + cita.fecha+"hora: " +cita.hora )
})

//registrar un paciente desde la invocación de la función registrar paciente 

