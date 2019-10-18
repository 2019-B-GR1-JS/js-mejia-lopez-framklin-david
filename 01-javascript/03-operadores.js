//operadores.js

const arreglo =[1,2,3,4,5,6,7,8,9,10];

for(const i in arreglo){//Indices
    console.log('I',i);
}

for(const i of arreglo){//Valores
    console.log('I',i);
}

// NO USAR FOR NORMAL

const respuestaForeach=arreglo
.forEach(
    function (valorActual, indiceActual, arreglo) {
    console.log('valorActual',valorActual);
    console.log('indiceActual',indiceActual);
    console.log('arreglo',arreglo);

    }
);

console.log('respuestaForeach',respuestaForeach);



const respuestaMap=arreglo
    .map( //Transformar-> Mutar Arreglo
        function (valorActual, indiceActual, arreglo) {
            return valorActual+5;

        }//Devolver un elemento
    );//Devuelve un arreglo +++NUEVO+++. ARREGLO TRANSFORMADO

const respuestaMap2=arreglo.map(r=>r+7);



console.log('respuestaMap',respuestaMap);
console.log('arreglo',arreglo );
console.log('respuestaMap2',respuestaMap2 );



const respuestaFilter=arreglo
    .filter( //Transformar-> Mutar Arreglo
        function (valorActual, indiceActual, arreglo) {
            return valorActual>7;

        }//Devolver un elemento ->Truty or falsy
    );//Devuelve un arreglo +++NUEVO+++. ARREGLO FILTRADO



console.log('respuestaFiltro',respuestaFilter);
console.log('arreglo',arreglo );



//AND - OR

//OR

const respuestaSome=arreglo
    .some( //Transformar-> Mutar Arreglo
        function (valorActual, indiceActual, arreglo) {
            return valorActual>9 && valorActual<12;

        }//Devolver un elemento ->Truty or falsy
    );//Devuelve un si o no -> Booleano



console.log('respuestaSome',respuestaSome);
console.log('arreglo',arreglo );



const respuestaEvery=arreglo
    .every( //Transformar-> Mutar Arreglo
        function (valorActual, indiceActual, arreglo) {
            return valorActual>1

        }//Devolver un elemento ->Truty or falsy
    );//Devuelve un si o no -> Booleano



console.log('respuestaEvery',respuestaEvery);
console.log('arreglo',arreglo );



const respuestaEjercicio=arreglo
    .map( //Transformar-> Mutar Arreglo
        function (valorActual, indiceActual, arreglo) {
            return ((valorActual/2)+7)

        }//Devolver un elemento
    ).filter( //Transformar-> Mutar Arreglo
        function (valorActual, indiceActual, arreglo) {
            return valorActual<10;

        }//Devolver un elemento ->Truty or falsy
    );//Devuel//Devuelve un arreglo +++NUEVO+++. ARREGLO TRANSFORMADO

console.log('respuestaEjercicio',respuestaEjercicio);
console.log('arreglo',arreglo );