//revisión de que los archivos si se enlazaron de manera correcta
//console.log("estoy vivo");

/*
Operador

Un elemento que nos permite realizar una operación entre dos o mas elementos 

tipos:
-operadores aritmeticos (+, -, *, /)
- operadores de asignación (=, ==, ===)
-operadores de cadenas(toLowerCase,toUpperCase,trim,toString, concat) *tambien conocidos como métodos
operadores lógicos (&&, || , !)
operadores de comparación (<, >, <=, >=, ==, ===)


operadore aritméticos

Son operadores aritmeticos que nos permien tomar valores númericos como sus operandos y retornar un valor numerico unico. corresponder a operaciones matemáticas

-suma +
- resta -
- multiplicación *
-división /
-módulo % (a%b te arroja el residuo de la división de a/b )
-Exponenciación ** 3*4= 3* 3*3*3=81


-
-1incremento ++ (variable++ incremento en uno en la variable llamada variable)
-decremento -- (variable-- decremento en uno en la variable llamada variable)
 hace una suma y una re asignación;
de tal manera que:
x++
es igual que
let x=x+1;




diferencias operador 
= igual (asignación de valor a una variable)
== igual (comparación )
=== los numero deben de ser totalmente iguales ya que java al comparar 2 variables de tipo  de dato diferente hace un conversión

por ejemplo 
5=="5" sería igual a true aunque uno sea un numero y el otro sea una caracter de una cadena de texto
5==="5" //false todos deben de ser el mismo tipo y del mismo valor, en ocasiones es más recomendado esté para tener un cuidado más estricto de nuestros tipos de datos.

*******************operadores de comparación*****************************
nos permiten comparar dos terminos y arroja un dato booleano (true o false)

    -mayor que (>)
    -menor que(<)
    -mayor o igual que (>=)
    -menor o igual que (<=)
    -igual que (==)
    -estrictimente igual (===)
    -no es igual (!=)
    -no es estrictamente igual (!==)

    ojo:
    ==  es una comparación mientras que:
    = es una asignación de valor;


ojo:    
18>18 //false 
2 negaciones son una afirmación 


//operador de asignación: sirver para asignar el valor de una variable
a la variable del lado izquierdo se le asigna el valor de la expresión de la derechar 

// operadores lógicos
nos devuelven un resultado a partir de que se cumpla (o no ) una condición, el resultado es booleano (true o false).
    -AND &&: sirve para determinar si dos expresiones son verdaderas. si ambas son verdaderas, el resultado es verdadero si alguna de ellas es falsa, todo el resultado es falso. si ambas son falsas, todo es falso


    


*/





let tengoUnCrush=true;
let miCrushMeQuiere=true;
if(tengoUnCrush&&miCrushMeQuiere){
    console.log("estoy feliz")

}else{
    console.log("me quiero desvivir ");
}
/**
 
    -OR || : sirve para determinar si alguna de las expresiones es verdadera, con una de las 2 expresiones que sea verdadera el resultado es verdader



 */

    if(hayChilaquilesVerdes || hayCarneEnSuJugo){
        console.log("Felipe desayuna chido");
    }else{
        console.log("Felipe no desayuna chido ")
    }
/**operador not* */
/**
 NOt (!): regresa lo contrario de lo que evaluamos

 */

 
/*
///////////////
//función para convertir de grados celsius a farenheit

function CtoF(gradosC){

    return gradosC*1.8+32;
}
let gradosF=CtoF(12);
console.log("el total de la conversión es: "+ gradosF+ "grados farenheit");
*/











