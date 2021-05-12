
function noParesDeContarImparesHasta(numero) {
    let cantidadNumeros = 0;
    for (let i = 0; i <= numero; i++) {
        if (i % 2 != 0) {
            cantidadNumeros += 1;
        }
    } return cantidadNumeros;
}
console.log(noParesDeContarImparesHasta(7));
