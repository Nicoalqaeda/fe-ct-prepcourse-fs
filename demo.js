//variables

var numero = 123;

var nombre = "Nicolas";


//Operadores

var resultado = 2 + 7;


//Operadores
var comparacion = 3 >= 4


//logicos

var resultadoLogico = (100 > 200)&&( 3 >= 3);


//metodos

var nombre = "Nicolas"

// console.log(nombre.length) //cuenta los caracteres del string

//funciones 

function sumar(a, b) {
    var suma = a + b;
    return suma;
}

// console.log(sumar(3, 4));

//condicionales

var edad = 15;

//if(edad > 18) {
//    console.log( "soy mayor de edad");
//} else {
//    console.log("soy menor de edad");
//}

function dominioDelPais(dominio){
    if(dominio==="co"){
        console.log("el pais es colombia");
    } else if (dominio==="br"){
        console.log("el pais es brasil");
    } else {
        console.log("el pais es argentina");
    }
}

dominioDelPais("uy")