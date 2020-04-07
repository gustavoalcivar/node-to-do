const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'True indica que la tarea ya fue completada'
}

const argv = require('yargs')
    .command('listar', 'Lista las tareas por hacer')
    .command('crear', 'Crea una tarea por hacer', {descripcion})
    .command('actualizar', 'Actualiza el estado de una tarea', {descripcion, completado})
    .command('borrar', 'Borra una tarea', {descripcion})
    .help()
    .argv

module.exports = {
    argv
}