//const { default: test } = require("node:test");
const calculadora= require("../calculadora");// esto es para decir que vas a requerir los datos que exportaste
const { exportAllDeclaration } = require("@babel/types");

//console.log(calculadora.suma); prueba para ver que muestra guarda todas las funciones


//prueba unitaria suma
test('Debe sumar numero de a+b',() => {
    expect(calculadora.suma(10,10)).toBe(20);//con expec hacemos la prueba para ver si es lo esperado, mientras que con el metodo toBe decimos que resultado esperamos que sea
})

//prueba unitaria resta
test('Debe restar numero de a-b',() => {
    expect(calculadora.resta(30,10)).toBe(20);//con expec hacemos la prueba para ver si es lo esperado, mientras que con el metodo toBe decimos que resultado esperamos que sea
})

//prueba unitaria multiplicación
test('Debe multiplicar numero de a*b',() => {
    expect(calculadora.multiplicacion(10,10)).toBe(100);//con expec hacemos la prueba para ver si es lo esperado, mientras que con el metodo toBe decimos que resultado esperamos que sea
})

//prueba unitaria division
test('Debe dividir numero de a/b',() => {
    expect(calculadora.division(10,10)).toBe(1);//con expec hacemos la prueba para ver si es lo esperado, mientras que con el metodo toBe decimos que resultado esperamos que sea
})


//podemos juntar todas las pruebas en una sola y solo haría un tes para todo el test suite
