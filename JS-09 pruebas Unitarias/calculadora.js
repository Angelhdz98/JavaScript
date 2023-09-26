/*

Las pruebas unitarias son una parte fundamental de la ingenieria de software, tiene como objetivo verificar la funcionalidad de una unidad de codigo. Vamos a entender por unidad de codigo a la parte mas pequenia que se puede "testear" o probar en una aplicacion, por ejemplo:

    - Ciclos
    - Funciones
    - Metodos
    - Etc.


Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el codigo funciona segun lo esperado, ademas nos va a ayudar a encontrar errores de forma mucho mas sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien nos ayuda a garantizar que el codigo sigue evolucionando o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios

*/

// escenario ficiticio
/*
function promedio(cal1, cal2, cal3){
    let promedioValue= (cal1+ cal2 + cal3);//formula básica para calcular un promedio


//ciclo para calcular aprobado o reprobado

if(promedio>=6){
console.log("Felicidades, aprobaste tu promedio fue: ", promedioValue);
}else
console.log("Necesitas estudiar más, estás reprobado, tu promedio fue ", promedioValue);

}
promedio(1,0,"8");//promedio 7
*/
//qué pasa si no ingreso las tres calificaciones?
//que sucede si una de estas calificaciones es un valor negativo 
//que pasa si una de mis calificaciones es un valor negativo 

//creamos una calculadora básica que trabaje con las 4 operaciones fundamentales (suma, resta, multiplicación y división ) para trabajar con pruebas unitarias 


//suma 

function suma(num1,num2){
    return num1+num2;
}
function resta(num1,num2){
return num1-num2;
}

function multiplicacion(num1,num2){
    return num1*num2
    }
    

    function division(num1,num2){
        return num1/num2;
        }


        //module.exports=division;
        // podemos agregar una linea igual anterior para cada función
        module.exports= {division,suma,resta,multiplicacion};//no importa el nombre, lo que importa es que se llamen igual

        
      /*

Para manejar nuestras pruebas unitarias, utilizamos JEST

    - JUnit (JAVA)
    - NUnit (.NET)
    - pytest (Python)
    - JEST (JS)


JEST es un marco de pruebas de JS mantenido por FB, enfocado a hacer pruebas unitarias de la forma mas simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones:


*/