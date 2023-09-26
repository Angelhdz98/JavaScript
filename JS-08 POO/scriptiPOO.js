/*Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.



    - clase: plantillas para crear objetos. Nos a definir un tipo de objeto y crear instancias (materialización ) de es te tipo de objetos 

    -Objeto: es la meterialización de la información de la plantilla 




    
// Mostrar un objeto similar a este
 /*
let Felipe {
    nombre : "Felipe ";
    apellido:

}

*/




//creando mi primer clase 

class persona {
    //propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad=0; 
    email= "";
    telefono = "";


    //3.defino un constructor que tomará los atributos como material para la instania o creación de los objetos
    //el constructor es una función especial, cuya función es la de construir o instanciar objetos  
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre= nombre;
        this.apellido= apellido;
        this.edad= edad;
        this.email=email;
        this.telefono=telefono;
        
    }


// 2.- método o comportamientos (funciones)
//para definir los metodos de mi objeto, ya no utilizo la palabra function 
hablar(){
    console.log("Hola estoy hablando. . . ");
} //cierre del metodo hablar 
dormir(){
    console.log("zzzzzzzzz");

}//cirre del metodo dormir 
mostrarInfo(){
console.log("Nombre: "+ this.nombre);
console.log("Apellido: "+ this.apellido);
console.log("Edad: "+ this.edad);
console.log("Email: "+this.email);
console.log("Telefono: "+ this.telefono);
// la diferencia entre usar la coma y el signo de mas es que cuando usas la coma se respea el tipo de dato, mientras que si usas el signo de más el dato que estés concatenando se convierte en string
console.log(persona2.nombre, persona2.apellido);// se pueden imprimen 2 atributos en una misma consola 



}//Cierre de metodo mostrar info
}//cierre de  clase persona 

/*Instancia de objetos del tipo de persona

sintaxis basica de una instancia 
variable nombreObjeto= new["palabrareservada"] nombreclase (parametros o atributos )

- new: la palabra resevada, se utiliza para indicar que es un nuevo objeto de esa clase, nos permite poder reutilizar la clase 
*/

let persona1= new persona("Felipe","Maqueda",31, "felipemaqueda@gmail.com", "5512345678");
let persona2= new persona("Luffy", "Monkey D.", 19, "mocke.mockemocke@meat.com","3312123123");
let yo= new persona("José", "Hernández", 25, "hernandeztorresjoseangel@gmail.com", "3324954210");

//Imprimir el objeto completo
console.log(persona1);
console.log(persona1.apellido);

//invocar un método del objeto 
persona1.dormir();

persona2.mostrarInfo();

//creando una nueva clase para aplicar la herencia (extends)


class paciente extends persona{
    //1. Definición de atributos o propiedades
    doctorAtiende="";//nombre del doctor que atiende 
    historialMedico="";//si o no 
    alergias="";//alergias existente
    //3.- Generación del constructor.
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende,historialMedico, alergias){
        super (nombre, apellido, edad, email, telefono);//super indica que traemos cosas de la parte superior 
        this.doctorAtiende=doctorAtiende;
        this.historialMedico=historialMedico
        this.alergias=alergias;

    }

  //2. Metodos
  mostrarInfo(){
   /*
   console.log("Nombre: " , this.nombre);
    console.log("Apellido: " , this.apellido);
    console.log("Edad: " , this.edad);
    console.log("Email: " , this.email);
    console.log("Telefono: " , this.telefono);
    *///no podemos heredar y modificar los metodos 
    console.log("Doctor que atiende: " , this.doctorAtiende);
    console.log("Historial Medico: " , this.historialMedico);
    console.log("Alergias: " , this.alergias);
}


}// cierre de mi definición de la clase paciente 

let paciente1= new paciente("Angel", "Hernandez", 25,"josea.hekdjf@gmail.com","3312673109","Tony chopper","no tiene","penicilina");

console.log (paciente1);

//uso del metodo mostrar info 
paciente1.mostrarInfo();


//diferencias entre un objeto literal (normal ) a diferencia de uno tipo JSON

//Todas las claves y los valores van dentro de comillas
//Envio de información a servidores usamos JSON
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}
// para tratar la información y scar datos especificospara DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}
/*
Realizar un programa que conste de una clase llamada Alumno, que tenga como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        -nombre
        -nota del alumno (calificación)
        -
    Metodos:
        -constructor 
        -metodo evaluación (si aprueba o no )
        -método imprimirInfo(nombre yt la nota)
    lógica de negocio:
        -If para evaluar la nota(si la nota es menor a 6 esta reprobado )
        -Recuperamos la información por medio de un prompt 
        -generamos 3 instancias para probar mi código (para tener un caso con la nota igual a 6 otro con la nota mayor a 6 y otro menor a 6 )         
*/
//sugerencia de que la creación de la clase sea en 3 pasos 


class alumno {
    //1.-atributos o propiedades
    nombre;
    nota;    

    //3.- constructor donde le doy identidad a mi objeto  
    constructor(nombre, nota){
        this.nombre=nombre;
        this.nota=nota;//el this se suele utilizar casi solo en el constructor, ya que es lo que atibuye cierta identidad a cada objeto 
    }

    //2.- métodos
    //método general, un metodo que reuqiere personalización porque aplicar para cualquier objeto 

    
    evaluacion(nota ){
        // condición para saber si esta aprobado o reprobado
        if(nota>=6){
            console.log("aprobado");
        } else{
            console.log("reprobado");
        }

    }
    imprimirInfo(nombre,nota){
        console.log("Nombre del alumno", nombre);
        console.log("nota del alumno",nota);

    }



}


//Instancias de alumnos 
let alumno1= new alumno("Felipe",3);
let alumno2= new alumno("Felipe",8);
let alumno3= new alumno("Felipe",7);

//Invocando metododos 
alumno1.evaluacion(alumno1.nota);//reprobado
alumno2.evaluacion(alumno2.nota);//aprobado
alumno3.evaluacion(alumno3.nota);//aprobado 