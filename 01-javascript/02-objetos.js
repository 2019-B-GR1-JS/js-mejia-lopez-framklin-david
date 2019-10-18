//02-objetos.js

//let const

// -> INMUTABLES (NO CAMBIA)
// VARIABLE CONSTANTE NO PUEDE SER REASIGNADO PERO SI MODIFICADA POR SUS METODOS


const arreglo=[1,4,2,3,4,5,6,7,8,9,10];

console.log('arreglo',arreglo);
arreglo.push(11);
console.log('arreglo',arreglo);
arreglo.pop();
console.log('arreglo',arreglo);

arreglo.splice(1,0,1.1);
console.log('arreglo',arreglo);

arreglo.unshift(0);
console.log('arreglo',arreglo);


//Sacando el indice
//BUSCA LA PRIMERA OCURRENCIA
const respuestaIndice=arreglo.indexOf(4);

console.log(respuestaIndice);


arreglo.splice(respuestaIndice,1);
console.log('arreglo',arreglo);



//const arregloNumeros=[1,2,3,4,];

//arregloNumeros=["a","b","c"]; //Tipo de datos String
//arregloNumeros=["a","b","c"]; //Tipo de datos String
//arregloNumeros=[true,false,true,true]; //Tipo de datos String
//arregloNumeros=[1,"a",true,false]; //Tipo de datos String
//arregloNumeros=1;


/*
function suma(a,b) {

    if(typeof a==='number' && typeof b==='number'){
        return a+b;

    }
    else{
        return 0;
    }

}

suma(1,2); //3
suma("a","b"); "ab"
suma();//undefined + undefined*/