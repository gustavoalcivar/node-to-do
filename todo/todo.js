const fs = require('fs')

let tareas

const cargarDB = () => {
    try {
        tareas = require('../db/data.json')
    } catch {
        tareas = []
    }
}

const guardarDB = () => {
    let data = JSON.stringify(tareas)

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(`No se pudo guardar el archivo. Error: ${err}`)
    });
}

const crear = (descripcion) => {
    cargarDB()
    let tarea = {
        descripcion,
        completado: false
    }

    tareas.push(tarea)
    guardarDB()
    return tareas
}

const listar = () => {
    cargarDB()
    return tareas
}

const actualizar = (descripcion, completado) => {
    cargarDB()
    let tarea = tareas.find(item => item.descripcion === descripcion)
    if(!tarea) {
        console.log(`La tarea ${descripcion} no existe en la base de datos`)
        return
    }
    tarea.completado = completado
    guardarDB()
}

const borrar = (descripcion) => {
    cargarDB()
    let tarea = tareas.find(item => item.descripcion === descripcion)
    if(!tarea) {
        console.log(`La tarea ${descripcion} no existe en la base de datos`)
        return
    }
    tareas = tareas.filter(item => item.descripcion !== descripcion)
    guardarDB()
}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}