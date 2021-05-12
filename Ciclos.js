function noParesDeContarImparesHasta(numero) {
    for (let i = 0; i <= numero; i++) {
        let cantidadNumeros = 0;
        if (numero[i] % 2 != 0) {
            cantidadNumeros += numero[i];
            return cantidadNumeros;
        }
    }
}
console.log(noParesDeContarImparesHasta(10));