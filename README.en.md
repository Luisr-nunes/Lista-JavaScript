# Exercise List — JavaScript Functions

<!-- badges -->
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

[Ler em Português](README.md)

Solutions to Exercise Sheet 1 on JavaScript functions: declaration, parameters, return values and math operations.

## Exercises

All files are in `FichaDeExercicios1/`. Each one declares the function, prints an example to the console and exports it with `module.exports`.

| File | Function | What it does |
| --- | --- | --- |
| `Questao1.js` | `somar(a, b)` | Adds two numbers |
| `Questao2.js` | `multiplicar(a, b)` | Multiplies two numbers |
| `Questao3.js` | `subtrair(a, b)` | Subtracts two numbers |
| `Questao4.js` | `divisao(a, b)` | Divides, returning an error message when the divisor is zero |
| `Questao5.js` | `calcularMedia(a, b, c, d)` | Arithmetic mean of four grades |
| `Questao6.js` | `elevarPotencial(a, b)` | Power with `Math.pow` |
| `Questao7.js` | `calcularAreaRetangulo(a, b)` | Rectangle area |
| `Questao8.js` | `verificarParOuImpar(a)` | Tells whether a number is even or odd using `%` |
| `Questao9.js` | `calcularRaizQuadrada(a)` | Square root |
| `Questao10.js` | `calcularHipotenusa(cateto1, cateto2)` | Hypotenuse via Pythagoras, with the root computed by Newton's method (10 iterations), without `Math.sqrt` |

Function names and console output are in Portuguese.

## Concepts practiced

- Function declaration, parameters and return values
- Conditionals to handle invalid input
- Arithmetic and modulo operators
- `Math.pow` and iterative square root
- Exporting functions with CommonJS

## Running

Requirement: Node.js.

```bash
git clone https://github.com/Luisr-nunes/Lista-JavaScript.git
cd Lista-JavaScript
node FichaDeExercicios1/Questao10.js
```

You can also paste the code into the browser console (F12, Console tab).

## Author

Luís Nunes — [GitHub](https://github.com/Luisr-nunes) · [LinkedIn](https://www.linkedin.com/in/luis-nunes-dev/)

Academic project from the Systems Analysis and Development program at Cesar School.
