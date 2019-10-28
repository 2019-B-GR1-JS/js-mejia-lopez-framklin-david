//07 Promesas

const fs=require('fs');



const sumarDosNumeros=(correcto)=>{

    return new Promise(
        (resolve,reject)=>{
            if(correcto){
                resolve('YEII');
            }
            else{
                reject('BUUU')
            }


        }

    );

};

const promesaSumarDosNumeros=sumarDosNumeros(false);


console.log('01) Iniciar');
promesaSumarDosNumeros
    .then(
        (ok)=>{
            console.log('ok',ok)
        }
    )
    .catch(
        (error)=>{
            console.log('error',error)
        }
    );

console.log('02) Terminar');






const leerArchivo=(pathArchivo)=>{
    return new Promise(
        (resolve, reject)=>{
            //res,rej

            fs.readFile(

                './01-variables.js',
                'utf8',
                (error,datos)=>{//calback
                    if(error){
                        reject(error);
                    }else{
                        resolve(datos);

                    }


                }

                /*()=>{//callback (async -sync)

                    callbackLeerArchivo
                }*/



            );



        }
    )
};

leerArchivo('./02-objetos.js')
    .then(
        (cont)=>{
            console.log(cont);
            return leerArchivo('./01-variables.js')
        }
    ).then(

    (cont2)=>{
        console.log(cont2)

    }
)
    .catch(

    );





fs.readFile(

    './01-variables.js',
    'utf8',
    (error,datos)=>{//calback


    }

    /*()=>{//callback (async -sync)

        callbackLeerArchivo
    }*/



);