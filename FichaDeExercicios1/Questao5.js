function calcularMedia (a,b,c,d){
    return (a + b + c + d) / 4;
}

let resultado = calcularMedia(10, 9, 8, 8)
console.log(`A média das notas foi: ${resultado}`)
module.exports = { calcularMedia }