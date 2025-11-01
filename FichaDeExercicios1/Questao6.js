function elevarPotencial (a,b){
    return Math.pow (a,b)
}

let resultado = elevarPotencial(5, 2)
console.log(`O resultado da elevação é: ${resultado}`)
module.exports = { elevarPotencial }