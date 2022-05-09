
const fs = require('fs');
const colors = require('colors');

// =====================================================
// CREATEFILEMULT COMO INSTANCIA DE UNA PROMESA
//======================================================

// const createFileMult = (base) => {

//     return new Promise ((resolve , reject)=>{



//         console.log(`
//     ===================================
//             TABLA DEL ${base} 
//     ===================================`)
    
//         let mult = 0;
//         let salida = '';
    
//         while (mult < 10) {
//             mult++
//             salida += `${base} x ${mult} = ${base * mult}\n` // \n se usa para hacer un salto de linea 
//         }
//         console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida) // escribir un archivo en el sistema con una funcion asincrona 
//         // la unica diferencia es que si sucede un error hay que ataraparlo entre un try catch 
//         resolve(`Tabla-${base}.txt creada correctamente`)

//     })

    
// }


// ==============================================================
// CREATEFILEMULT COMO FUNCION ASINCRONA QUE RETORNA UNA PROMESA
//===============================================================


const createFileMult = async (base, listar, h) => {

   

try {
    
    
    let mult = 0;
    let salida = '';
    consola = '';
    
    while (mult < h) {
        mult++
        salida += `${base} x ${mult} = ${base * mult}\n` // \n se usa para hacer un salto de linea 
        consola += `${base} ${'x'.underline.blue} ${mult} = ${base * mult}\n` // \n se usa para hacer un salto de linea 
    }
    
    if(listar === false){
        
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida) // escribir un archivo en el sistema con una funcion asincrona 
        // la unica diferencia es que si sucede un error hay que ataraparlo entre un try catch 
        return (`Tabla-${base}.txt creada correctamente`)
        
        
    } else {
        
        
        console.log('=============================='.inverse)
        console.log( `      TABLA DEL ${base}        `.inverse)
        console.log('==============================\n'.inverse)
        

        console.log(consola)

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida) // escribir un archivo en el sistema con una funcion asincrona 
        // la unica diferencia es que si sucede un error hay que ataraparlo entre un try catch 
        return (`Tabla-${base}.txt creada correctamente`)
        
    }
    
    
    
    

} catch (error) {
    console.log(error)
}

}


// fs.writeFile(`tabla-${base}.txt`, salida, (error) =>{ // requiriendo fs (filesystem) tenemos acceso a los metodos de node
    // que nos permiten acceder a los archivos del sistema, crearlos o modificarlos, en este caso el metodo fs.writefile     // permite crear un archivo persistente en pc ya que se graba en disco 

// if(error) throw error;
// console.log(`Tabla-${base}.txt creada correctamente`)

// })


module.exports = 
 createFileMult
;

