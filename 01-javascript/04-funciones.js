function imprimirMensaje(mensaje){

    //console.log(`Mensaje ${mensaje}`);
    //NO HAY UN RETURN
    const impresion=`Mensaje ${mensaje}`;
    console.log(impresion);
    return impresion;
}

const respuesta= imprimirMensaje(123);
console.log(respuesta);

function sumarDosElementos(numeroUno,numeroDos){

    return numeroDos+numeroUno;
}
console.log(sumarDosElementos(1,6));



function sumarElementos(numeroUno,...arregloParametrosInfinitos){

    //console.log(otro); //DEVUELVE UN ARREGLO [2,3,4,5]
    //arreglo.reduce((a,b)=>a+b,numeroUno); //IMPORTANTE
    if(arregloParametrosInfinitos){
        return arregloParametrosInfinitos
            .reduce(
                (valorInicial,valorActual)=>{
                    return valorInicial+valorActual;
                },
        numeroUno
            );

    }else{
            return numeroUno;
    }

}
console.log(sumarElementos(1,2,3,4,5));



const restar = function (a,b){
    return a-b;
};
console.log(restar(2,5));


//fat arrow function=> Anonymus function
//cuando se asigna

const restar1=(a,b)=>{
  return a-b
};


const restar3 = (letra)=>{
    return letra.toUpperCase();

};

const restar1234 = letra=>letra.toUpperCase();
console.log(restar1234("a"));


// los 3 puntos hace una destructuracion de parametros



const arregloN=[1,2,3,4,5,6];
//Destructuramos al arreglo
sumarElementos(...arregloN);

console.log(sumarElementos(...arregloN));

console.log(sumarDosElementos(...arregloN));


const arregloN1=[1,2,3,4,5,6];
const arregloN2=[7,8,9,10,11,12];

console.log([...arregloN1,...arregloN2]);

const objetoDavid={
  nombre:"David",
};

const objetoMejia={
    apellido:"Mejia"
};

const objetoDM={
    ...objetoDavid,
    ...objetoMejia,
    edad:12
};

console.log(objetoDM);

function cambiarEdad(edad,objeto){
 objeto.edad=edad;
 return objeto;

}
const oDM=JSON.stringify(objetoDM);
console.log(oDM);


const oDMClonado=JSON.parse(oDM);
console.log(oDM);

oDM.edad=21;
console.log(oDMClonado);
console.log(objetoDM);


const clonDM={
    ...objetoDM
};


clonDM.edad=21;
delete clonDM.edad;
console.log(clonDM);
console.log(objetoDM);