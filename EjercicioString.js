function dominio(valor) {
    let dominioArray = valor.split(' ');
    dominioArray.unshift('http://www.');

    return dominioArray.join('');
}
console.log(dominio('digitalhouse.com.ar'));