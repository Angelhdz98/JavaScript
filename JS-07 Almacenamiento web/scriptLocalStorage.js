/*

API de almacenamiento web


Nos permite almacenar informacion en nuestro navegador, de dos formas:

    - local (persistencia de los datos)
    - sesion (los datos son volatiles)

    
Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.

Almacenamiento Local (LocalStorage)

La informació que pongamos en un almacenamiento local se guarda indefinidamente hasta que sea eliminado por código o borrado del navegador (borrar historial)

casos de uso: articulos de carrito de compras guardamos un perfil de configuración, historial  de uso.

*/

//guardando mi primer dato en el LocalStorage 

//LocalStorage.setItem(key, value);

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");

//Guardando un carrito de compras 

let carritoComprasFelipe =["coca","sabritones", "Chicles", "Tortillas"];
localStorage.setItem("CarritoCompras", carritoComprasFelipe);

// Obtener la información almacenada en mi localStorage 
//localStorage.getItem("Apellido")

let Apellido= localStorage.getItem("Apellido");
console.log(Apellido);


//Recuperando el carrito de compras
let carrito = localStorage.getItem("CarritoCompras");
console.log(carrito);
//borrar un elemento del localStorage
//localStorage.removeItem(key);
localStorage.removeItem("CarritoCompras");//mismo nombre de la llave con la que gardamos el elemento 

//Conocer el largo o longitud del LocalStorage
//local.storage.length()

let longitudLocalStorage=localStorage.length;
console.log(longitudLocalStorage);




