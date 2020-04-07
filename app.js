const argv = require('./config/yargs').argv
const {crear, listar, actualizar, borrar} = require('./todo/todo')
const colors = require('colors')

switch(argv._[0]) {
    case 'crear':
        crear(argv.descripcion)
        break
    case 'listar':
        for(let tarea of listar()) {
            console.log('==================================='.yellow)
            console.log(`Tarea: ${tarea.descripcion}`)
            if(tarea.completado === true)
                console.log('Completado:', colors.green(tarea.completado))
            else
                console.log('Completado:', colors.red(tarea.completado))
        }
        break
    case 'actualizar':
        actualizar(argv.descripcion, argv.completado)
        break
    case 'borrar':
        borrar(argv.descripcion)
        break
    default:
        console.log(`No se reconoce el comando ${argv._[0]}`)
        break
}