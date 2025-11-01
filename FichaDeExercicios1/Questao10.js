function calcularHipotenusa(cateto1, cateto2) {
    const quadradoCateto1 = cateto1 * cateto1;
    const quadradoCateto2 = cateto2 * cateto2;
    
    const somaQuadrados = quadradoCateto1 + quadradoCateto2;
    
        let estimativa = somaQuadrados / 2;
    
    for(let i = 0; i < 10; i++) {
        estimativa = (estimativa + somaQuadrados / estimativa) / 2;
    }
    
    return estimativa;
}

let resultado = calcularHipotenusa(5, 4);
console.log(`O resultado da hipotenusa é: ${resultado}`);

module.exports = { calcularHipotenusa };