const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
    completado: {
        alias: 'c',
        default: true,
        desc: 'Marca como completada o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Crea un elemento por hacer', descripcion)
    .command('borrar', 'Borra un elemento por hacer', descripcion)
    .help()
    .argv;

module.exports = {
    argv
}