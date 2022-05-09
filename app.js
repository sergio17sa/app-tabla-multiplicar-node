const  createFileMult  = require('./Helpers/Multiplicar');
const { argv } = require('./Config/yargs')



console.clear();

createFileMult(argv.b, argv.l, argv.h)
    .then((nombrearchivo) => console.log(nombrearchivo, 'creado'))
    .catch((error) => console.log(error))

