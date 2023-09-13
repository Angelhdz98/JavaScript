console.log("practicando Bucles consultorio")
var contraseñaGuardado="ataqueArtesano23";
var usuarioGuardado="angelhdz98";

function logIn(){
int
var intentos=0 ;
var accessIn=false;

while(accessIn=!true && intentos<3){
    usuario=prompt("ingrese su nombre de usuario 3 ");

contraseña=prompt("ingrese su contraseña: ")
if (usuario==usuarioGuardado && contraseña==contraseñaGuardado){
console.log("acceso permitido");
accessIn=1;
}

console.log("contraseña invalida numero de intentos: "+intentos)
parseInt(intentos++);

    
}

if(intentos==3){
    console.log("excediste el numero de intentos");
}

}

logIn();
