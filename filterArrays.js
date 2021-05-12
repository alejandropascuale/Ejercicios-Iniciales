let estudiantes = [
    { nombre: 'John', promedio: 8.5, aprobado: true },
    { nombre: 'Jane', promedio: 7, aprobado: true },
    { nombre: 'June', promedio: 3, aprobado: false },
]
let estadoExamen = [];
function estado(array) {
    for (let i = 0; i < array.length; i++) {
        estadoExamen += array[i];
    } return estadoExamen;
}
console.log(estadoExamen(estudiantes));