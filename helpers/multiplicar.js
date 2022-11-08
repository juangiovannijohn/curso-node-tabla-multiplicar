const { rejects } = require('assert');
const fs = require('fs');

const crearArchivo= (base = 1)=>{
    return new Promise((resolve, rejects)=>{
        console.log('================');
        console.log(`  Tabla del ${base}`);
        console.log('================');
        let salida = '';
        for (let index = 1; index <=10; index++){
            
            salida += `${base} x ${index} = ${base * index}
`
        }
        console.log(salida)
        const nombreArchivo = `tabla-del-${base}.txt`
        fs.writeFileSync( `./salida/${nombreArchivo}`, salida)
    
        console.log(`${nombreArchivo} creado correctamente`)
        resolve(nombreArchivo);
        rejects(`Error al crearse el archivo ${nombreArchivo}`)
    })

}

module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}