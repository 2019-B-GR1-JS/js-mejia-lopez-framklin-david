const fileSystem =require('fs');

console.log('Iniciando');
fileSystem.readFile(

    './04-funciones.js',
    'utf8',
    callbackLeerArchivo,

    /*()=>{//callback (async -sync)

        callbackLeerArchivo
    }*/



);

function callbackLeerArchivo(error,datos){

    if(error){
        console.error(
            {
                mensaje:'Error leyendo el archivo',
                //error:error,
                error,

            }
        )
    }else{
        console.log('Datos: ', datos);
        fileSystem.readFile(

            './03-operadores.js',
            'utf8',
            callbackLeerArchivo1,

            /*()=>{//callback (async -sync)

                callbackLeerArchivo
            }*/



        );

    }


}

function callbackLeerArchivo1(error,datos){

    if(error){
        console.error(
            {
                mensaje:'Error leyendo el archivo',
                //error:error,
                error,

            }
        )
    }else{
        console.log('Datos: ', datos);
        fileSystem.readFile(

            './02-objetos.js',
            'utf8',
            callbackLeerArchivo2,

            /*()=>{//callback (async -sync)

                callbackLeerArchivo
            }*/



        );
    }


}


function callbackLeerArchivo2(error,datos){

    if(error){
        console.error(
            {
                mensaje:'Error leyendo el archivo',
                //error:error,
                error,

            }
        )
    }else{
        console.log('Datos: ', datos);
        fileSystem.readFile(

            './01-variables.js',
            'utf8',
            callbackLeerArchivo3,

            /*()=>{//callback (async -sync)

                callbackLeerArchivo
            }*/



        );

    }


}


function callbackLeerArchivo3(error,datos){

    if(error){
        console.error(
            {
                mensaje:'Error leyendo el archivo',
                //error:error,
                error,

            }
        )
    }else{
        console.log('Datos: ', datos);

    }


}










