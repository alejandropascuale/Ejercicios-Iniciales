function anterior(numero) {
    return numero - 1;
}
function triple(numero) {
    return numero * 3;
}
function anteriorDelTriple(numero) {
    return triple(numero) - (numero - anterior(numero));
}
console.log(anteriorDelTriple(15));