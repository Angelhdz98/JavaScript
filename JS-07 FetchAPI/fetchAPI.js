/*

retomando las APIs. . . .

    -APIs internas (API DOM, LocalStorage, Drag and Drop): son todas aquellas APIs que vienen por default en el navegador
    
    -APIs externas (google maps, FakeStore API, API PayPal, etc): son todas aquellas que tenemos que uttilizar de proveedores externos

    ejemplo de la licuadora, donde la licuadora en el cliente, el enchufe es la API y el recurso que se solicita es la electricidad

    ventajas de utilizar APIs 

        -Reestructurar y organizar los sistemas de forma que sean más sencillo de usar
        -permiter que los sistemas sean más robusos 
        -Reducen los costos de mantenimiento 
        -Permitir que los sistemas sean escalables 



*/

/*
//asincronía
 por defecto, JS se comporta de una form síncrona (de arriba hacia abajo, de izquierda a derecha), es decir, utilizamos JS de una forma autobloqueante (si hay un error, lo que está después de ese error no se ejecuta )

es decir utilizamos JS se comporta de una forma síncrona(de arriba habia abajo)


*/
/*
//ejemplo de una operación sincronica
console.log("Inicia mi operación síncrona");

function dosSincronica(){
    console.log("dos");
}
function unoSicronico(){
    console.log("uno");
    dosSincronica();
    console.log("tres");
}
unoSicronico();
console.log("fin de mi operación síncrona");

*/

//los casos donde me conviene tener operaciones sincronas son (lectura de arrays, uso de algunos metodos de arrays, condicionales, ciclos, ejecución de funciones "normales").
/* 
//asincronía 
es la capacidad que tiene JS para poder ejecutar funciones que no dependan de otras. esto nos ayuda  a ejecutar ciertos bloques de códgio sin tener que esperar a que termine su ejecución, para ejecutar otras lineas de código (dejar la carne en el asador mietra preparo otras cosas en el ejemplo).

*/
/*
console.log("inicia mi operacion asincrona");
//Ejemplo de JavaScript
function dosAsync(){
    console.log("uno");
    setTimeout(function(){// setTime para ejecutar esta función después de 3 segundos 
    console.log("dos");
    },3000);
}

function unoAsync(){
    dosAsync();
    console.log("Tres");
}

unoAsync();x
console.log("termina mi operación asínrona");

*/

//métodos para manejar la asincronía en JS
/* 
para contar la asincronía en JS, podemos usar algunos de estos mecanismos

    -callback: la forma más clásica de manejar la asincronía. se le conoce como (llamada de vuelta), basicamente es pasar una función como parametro de otra función, y se ejecutan una vez que se cumpla la condición esperada 

    //metodo .map de los arrays

    
    -promesas: son objetos que representan un valor al momento de conectar con el servidor. como su nombre lo indica una promesa es algo que no sabemos si se va a cumplir o no pero al menos necesitamos saber que hacemos si se cumple o si no se cumple 
     
    la ventaja que tienen las promesas es que no se anidan, en una sola función podemos manejar ambas situaciones 
    Las promesas tienen 3 estados posibles: 
        -pending: estado inicial(todas las promesas comienzan con este estado), cuando se crea la promesa. aquí aún no hay resultados 
        -fullfiled: cuando la operación asincrona se resuelve con éxito (resolve)
        -rejected: cuando la operación asincrona falla (reject);






    -async/await:

*/

/*
//usando promesas 
//funcionespecial para consumir APIs yu manejar promesas

//instrucción de conexión a servidor
fetch("https://fakestoreapi.com/products/1")

//dos escenarios (obtengo respués o no obtengo respuesta)

.then(datos=>{//cuando la promesa se resueleve, ejecuto esta función
    console.log(datos);
    return datos.json(); //convertir la respuesta


    
})// si encuentra el dato nos manda la caja con el valor o el objeto deseado

.catch(error=>{
console.log("error, no encontramos el producto");
console.log(error.message);
})// en caso de que no se encuentre te regresa la caja con algún mensaje, importante que la caja no llegue vacía para saber de donde viene el error 
*/
/*
sinatix del fetch (con promesas)

fetch(url a consumir)//no usar ;
.then (response=> response.text())//manejo la respuesta
.then (datos => console.log(datos))//manejo el dato
.catch(eror=>console.log(error));


*/


/*

//asigno el fetch a una variable...
const conexion = fetch("https://fakestoreapi.com/products/1");

//imprimo la variable (para ver el objeto completo)
console.log("Este es mi objeto Promesa: ", conexion);

//referencia a mi fetch para poder usar sus metodos
conexion

//usar el metodo then para manejar la respuesta(lo relleno con la respuesta)
.then(function (resultado){
    console.log("Dentro de esta funcion que maneja la respuesta, encontraras: ", resultado);
    return resultado.json();
})
//valida que tiene la configuración

//uso el metodo then para manejar el producto(lo rellenoo con la info del producto)
//pide el producto 
.then(function(producto){
    console.log("Informacion del producto: ", producto);
})

//uso el metodo catch para manejar el error (lo relleno con un error para que la caja no regrese vacia)
.catch(function (error){
    console.log("Error", error);
})





*/



//producto como respuesta de un servidor en formato plano (texto)let
/* productoServidor = {"id":17,"title":"Rain Jacket Women Windbreaker Striped Climbing Raincoats","price":39.99,"description":"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.","category":"women's clothing","image":"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg","rating":{"rate":3.8,"count":679}}//producto como objeto JSONlet 
 productoJSON = { id:17, title:"Rain Jacket Women Windbreaker Striped Climbing Raincoats", price:39.99, description:"Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",category:"women's clothing",image:"https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",rating:{rate:3.8, count:679}}//Revisar informacion de un objeto con texto plano
 console.log(productoServidor.price);//Revisar informacion de un objeto tipo JSON
 console.log(productoJSON.price);
 */

 //Recomendación para APIs primero mandar un metodo GET para saber la estructura y después mandar un metodo post



 

