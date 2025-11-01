function divisao(a,b){
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
}

let resultado = divisao(10, 5)
console.log(`O resultado da divisão é ${resultado}`)
module.exports = { divisao }
