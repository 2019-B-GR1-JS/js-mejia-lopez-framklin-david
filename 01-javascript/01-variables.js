//JSON

// var nombre="adrian";


//Mutable (No queremos)

//let nombre="David";

//nombre="Carolina";

//nombre=1;

//No mutables (Inmutable) (No cambia)

const cedula=1123123;

const mensaje=`Siempre usar const si ya toca usar let y nunca usar var`;



let nombre="David";
console.log(typeof nombre,'nombre');
let numeros=1;
console.log(typeof numeros,'numeros');
numeros=1.1;
console.log(typeof numeros,'numeros decimales');
let casado=false;
console.log(typeof casado,'');
let hijos=null;
console.log(typeof hijos,'');
let mascotas=[];
console.log(typeof mascotas,'');
let hermana={};
console.log(typeof hermana,'');


//Condicion

//Truty
//Falsy


if ("") {
    console.log("Truty");

} else {
    console.log("Falsy");
}

if (0) {
    console.log("Truty");

} else {
    console.log("Falsy");
}
if (-1) {
    console.log("Truty");

} else {
    console.log("Falsy");
}
if (1) {
    console.log("Truty");

} else {
    console.log("Falsy");
}
if (null) {
    console.log("Truty");

} else {
    console.log("Falsy");
}

if ({}) {
    console.log("Truty"); //truty

} else {
    console.log("Falsy");
}

if ([]) {
    console.log("Truty"); //truty

} else {
    console.log("Falsy");
}


//JSON-JS

const david = {
    "nombre": "David",
    "apellido": "Mejia",
    edad: 10,
    casado: false,
    hijos: null,
    hermana: {nombre: "Carolina"},
    mascotas: [


        {
            nombre: "Cachetes",
        }

    ],


};

console.log(david.nombre);
console.log(david.hermana);
console.log(david.mascotas[0].nombre);
david.sueldo=1.2;
david["deudas"]=10000;
console.log(david);
delete david.hijos;
console.log(david);




