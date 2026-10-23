# Lista de Exercícios — Funções em JavaScript

<!-- badges -->
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)

[Read in English](README.en.md)

Resolução da Ficha de Exercícios 1 sobre funções em JavaScript: declaração, parâmetros, retorno e operações matemáticas.

## Exercícios

Todos ficam em `FichaDeExercicios1/`. Cada arquivo declara a função, mostra um exemplo no console e a exporta com `module.exports`.

| Arquivo | Função | O que faz |
| --- | --- | --- |
| `Questao1.js` | `somar(a, b)` | Soma dois números |
| `Questao2.js` | `multiplicar(a, b)` | Multiplica dois números |
| `Questao3.js` | `subtrair(a, b)` | Subtrai dois números |
| `Questao4.js` | `divisao(a, b)` | Divide, retornando mensagem de erro quando o divisor é zero |
| `Questao5.js` | `calcularMedia(a, b, c, d)` | Média aritmética de quatro notas |
| `Questao6.js` | `elevarPotencial(a, b)` | Potência com `Math.pow` |
| `Questao7.js` | `calcularAreaRetangulo(a, b)` | Área do retângulo |
| `Questao8.js` | `verificarParOuImpar(a)` | Indica se o número é par ou ímpar com o operador `%` |
| `Questao9.js` | `calcularRaizQuadrada(a)` | Raiz quadrada |
| `Questao10.js` | `calcularHipotenusa(cateto1, cateto2)` | Hipotenusa por Pitágoras, com a raiz calculada pelo método de Newton (10 iterações), sem `Math.sqrt` |

## Conceitos praticados

- Declaração de funções, parâmetros e retorno
- Condicionais para tratar casos inválidos
- Operadores aritméticos e de módulo
- `Math.pow` e cálculo iterativo de raiz quadrada
- Exportação de funções com CommonJS

## Como executar

Pré-requisito: Node.js.

```bash
git clone https://github.com/Luisr-nunes/Lista-JavaScript.git
cd Lista-JavaScript
node FichaDeExercicios1/Questao10.js
```

Também é possível colar o código no console do navegador (F12, aba Console).

## Autor

Luís Nunes — [GitHub](https://github.com/Luisr-nunes) · [LinkedIn](https://www.linkedin.com/in/luis-nunes-dev/)

Projeto acadêmico do curso de Análise e Desenvolvimento de Sistemas da Cesar School.
