//funciones
//progrma para hacer limonada
function exprimirLimones(cantidad){
    console.log("exprimiendo "+ cantidad + " Limones");
    let jugoExtraido = cantidad*10;// considerando obtener 10 ml/limon
console.log("Se obtuvo " + jugoExtraido + "ml de jugo de limón");
return jugoExtraido
}
// función para mezclar el jugo con agua y azucar
function mezclarJugoDeLimon(cantidadDeJugo,cantidadDeAgua,cantidadDeAzucar){


console.log("Mezclando " + cantidadDeJugo+ "ml de jugo de limon con "+ cantidadDeAgua + "ml de agua y " + cantidadDeAzucar+ "gramos de azucar");
}

function servirLimonada(){
    console.log("Sirviendo la limonada en un vaso");
    vasoDeLimonada=true;
}
//declaramos función principal que prepare mi limonada
function prepararLimonada(cantidad){
    let jugoDeLimon= exprimirLimones(cantidad);
    mezclarJugoDeLimon(jugoDeLimon, 200,10);//cantidades ficiticias para el agua de limón
    servirLimonada();
}

var vasoDeLimonada = false;
prepararLimonada(5);//llamado a la función que las engloba

