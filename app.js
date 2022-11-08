const { number } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
})
.check( (argv, options)=>{
    if (isNaN(argv.b)) {
        throw 'La base tiene que ser un numero.'
    }
    return true;
    console.log('yargs',argv);
})
.argv;
console.clear();
console.log(argv);
console.log('base: yargs',argv.base);


crearArchivo(argv.b).then(nombreArchivo => console.log(nombreArchivo, 'creado correctamente'))
.catch(err => console.log(err))

