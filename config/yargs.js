const p = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado o pendiente la tarea'
    },
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }

}

const o = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', o)
    .command('actualizar', 'Actualiza el estado completo de una tarea', p)
    .command('borrar', 'Borrar una tarea', o)
    .help()
    .argv;

module.exports = {
    argv
}