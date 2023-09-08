//Función para elegir especialidad

let especialidad = prompt ("Busque el tipo de especialidad requerida...")



switch(especialidad) {

    case "Odontologia":
        console.log("Servicio de Odontologia Disponible");
        break;
    case "Endodoncia":
        console.log("Servicio de Endodoncia Disponible");
        break;
    case "Ortodoncia":
        console.log("Servicio de Ortodoncia Disponible");
        break;
    case "Ortopediatra":
        console.log("Servicio de Ortopediatria Disponible");
        break;
    case "Periodoncia":
        console.log("Servicio de Periodoncia Disponible");
        break;
    case "Maxilofacial":
        console.log("Servicio Maxilofacial Disponible");
        break;   
    case "Patologia Bucal":
        console.log("Servicio de Patologia Bucal Disponible"); 
        break;
    case "Prostodoncia":
        console.log("Servicio de Prostodoncia y rehabilitacion oral Disponible");
        break;
    default:
        console.log("Servicio no disponible");


}
//funcion para validar si el usuario ya esta registrado o no 

let nombreUsuario = prompt ("Hola, introduce tu nombre de usuario:");

function estaUsuarioRegistrado(nombreUsuario, listaUsuarios) {
    return listaUsuarios.includes(nombreUsuario);
  }
  
  // lista de usuarios:
  var listaDeUsuariosRegistrados = ["usuario1", "usuario2", "usuario3"];
  
  var nombreDeUsuarioBuscado = nombreUsuario;
  if (estaUsuarioRegistrado(nombreDeUsuarioBuscado, listaDeUsuariosRegistrados)) {
    console.log("El usuario está registrado.");
  } else {
    console.log("El usuario no está registrado.");
  }

  
//Funcion para verificar la cita en el consultorio dental

let citaSolicitada = true; // true para una cita solicitada
let datosCorrectos = true; ///true para datos de contactos correctos,false para datos faltantes y null para datos vacios
function verificarCita(cita, datosCorrectos) {
    if (cita) {
        if (datosCorrectos) {
            console.log("llamar al paciente para confirmar o reagendar");
        } else if (datosCorrectos == null) {
            console.log("faltan datos de contactos no se puede contactar al paciente");
        } else {
            console.log("datos de contactos validos llamar para preguntar si desea sacar cita");
        }
    }
}

//función para generar cita
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
/////********* */////////
/*Función para registrar pacientes */

pacientes = [];

function registrarpacientes(
  nombre,
  apellidoPaterno,
  apellidoMaterno,
  email,
  telefono
) {
  paciente = {
    nombre: "",
    apellido_paterno: "",
    apellido_materno: "",
    email: "",
    telefono: 0,
  };

  paciente.nombre = nombre;
  paciente.apellido_paterno = apellidoPaterno;
  paciente.apellido_materno = apellidoMaterno;
  paciente.email = email;
  paciente.telefono = telefono;

  pacientes.push(paciente);

  window.alert("Se añadio un nuevo paciente");

  window.alert(JSON.stringify(paciente));
}

eleccion = true;

while (eleccion) {
  input = prompt("Quieres añadir un paciente si/no");
  input.toLowerCase();

  print(input);

  if (input === "si") {
    nombre = prompt("Ingresa tu nombre: ");
    apellidoPaterno = prompt("Ingresa tu apellido paterno");
    apellidoMaterno = prompt("Ingresa tu apellido materno");
    email = prompt("Ingresa tu email");
    telefono = prompt("Ingresa tu telefono");

    registrarpacientes(
      nombre,
      apellidoPaterno,
      apellidoMaterno,
      email,
      telefono
    );
  } else if (input == "no") {
    console.log("no");

    eleccion = false;
  }
}

console.log(pacientes);

