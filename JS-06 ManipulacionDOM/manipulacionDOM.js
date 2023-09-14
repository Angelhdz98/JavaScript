/**
 Manipuclación del DOM

 cuando creamos paginas con HTML+CSS son paginas estaticas ya que no tienen interactividad, en cambio cuando le agregamos JS los vuelve interactivas ya que se hacen sitios dinámicos  (se vuelven interactivas )

 El navegador lee el documento html de arriba a abajo y de izquierda a derecha( renderización )

 para que una pagina se renderice correctamente, se toma en cuenta el contendido, el peso de las imagenes y la conexión a internet o servidor

 cuando el documento se renderiza se crea un "árbol" con todas estas etiquetas quiere decir que este documento tiene muchas ramas ques son las etiquetas y cada uno de los elementos que tenemos dentro de las etiquetas se consideran "hojas"  (Nodos )


 cuando hablamos del DOM y entendemos que se representa como un arbol con ramas y hojas entendemosque cada una de estas ramas y hojas es un no 

 qué es un nodo?
 Representación más básica de lo que existe en un DOM, puede ser un elemento, etiqueta atributo, un texto, incluso un comentario 

 -Document: Nodo raiz, a partir del cual se derivan los demás nodos es el objeto a partir del cual se puede acceder a cualquier elemento dentro de el. todos los nodos derivan de este
 
 -Element: son nodos definidos por etiquetas HTML (div,h1, p, img, meta, head, script, etc ) ya sea que se vean o no se vean

 -Text: El texto que hay dentro de un elemento se considera un nodo con la caracteristica de que es un nodo hijo 

 -attribute: los atributos de las etiquetas también se convierten en nodos. que estan asociados a elementos y se pueden considerar también nodos hijos 
 -Comment: Los comentario también son un nodo porque también forma parte del documento 

    ¿Para que utilizamo JS en el DOM ?
        -Agregar elementos HTML
        -Modifivar elementos HTML
        -Borrar elementos HTML


 */
//ejemplo document
// document.body.p //te  metes en el documento de ahí entras al dody y de ahí entras a la etiqueta p

//comenzamos a trabajar con los nodos de mi documento html

//1. paso guardar los elementos HTML en variables de JS (let var const)

/**Métodos de selección de elementos: permiten traer una etiequeta html y guardarla para su uso posterior
        metodos tracicionales:
            -getElementById
            -getElemtsByTagName
            -getElementsByClassName

*/

let nombrePaciente= document.getElementById("nombrePaciente");
console.log(nombrePaciente);




let columnas= document.getElementsByClassName("col");
console.log(columnas);


/*Metodoso actuales 
la unica diferencia entre el querySelector y el getElement, es que tenemos que especificar el tipo de selector que usaremos (. para las clases, #para los id, )
document.querySelector()
document.querySelectorAll()




*/


let containerPadre=document.querySelector("#containerPadre");//Solo te trae el primer elemento que encuentre con ese identificador que le pongas
console.log(containerPadre);


let containers= document.querySelectorAll(".container");// te trae todos los elementos que hacen match

/**Métodos para modificar elementos en su texto 
 *  -innerHTML:eta propiedad nos permite acceder y modificar elcontnido de nuestro elemento. Aisgnamos una cadena de texto y podemos modificar o eleminar el texto 
 * -textContent: cambiar o recurar el contenido dentroi de un elemento. podemos modificar o eliminar el texto(crear un texto nuevo)
 
 */

//cambhiando el valor de un texto con innerHTML
let titulo= document.getElementById("titulo");

titulo.innerHTML="Nuevo texto de mi título";


// Creando un nuevo texto con innerHTML
let mensajeConfirmacion= document.getElementById("mensajeConfirmacion");
mensajeConfirmacion.innerHTML="<p> Mensaje de confirmación  </p>";

/**
crear elementos 
    -crear elemento
        *createElment
        *createTextNode
        *createComment

    -poner elemento
        *append
        *appendChild


 */
//creando un elemento con createElement
let imagen=document.createElement("img");

//crear los atributos de un elemento
imagen.src="https://soyunperro.com/wp-content/uploads/perrocontento.jpg"
imagen.alt="Foto de perrito feliz";


//poner mi imagen en el contenedor de mensaje de confirmación
mensajeConfirmacion.appendChild(imagen)




