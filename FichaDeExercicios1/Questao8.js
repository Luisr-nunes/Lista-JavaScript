function verificarParOuImpar(a){
    if (a % 2 === 0) {
        return "O número é par";
    } else {
        return "O número é ímpar";
    }
}

let resultado = verificarParOuImpar(6)
console.log(`O resultado da verificação é: ${resultado}`)
module.exports = { verificarParOuImpar }