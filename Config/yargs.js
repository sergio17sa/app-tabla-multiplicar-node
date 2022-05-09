const argv = require('yargs')
.option('b', {
alias: 'base',
type: 'number',
demandOption: true,
describe: 'Es la Base de la tabla de multiplicar'})
.option('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption: true,
    default: false, 
    describe: 'Muestra la tabla de multiplicar por consola'
})
.option('h', {
    alias: 'high',
    type: 'number',
    demandOption: true,
    describe: 'Muestra la altura de la tabla de multiplicar'
})

.check((argv,options)=>{
    if( isNaN(argv.b)) throw `la base debe ser un número`
    else return true
})
.argv


module.exports = {argv}