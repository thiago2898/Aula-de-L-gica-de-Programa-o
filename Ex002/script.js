let num1 = Number(window.prompt("Digite um número: ")) // Cria uma variável local que atribui o valor de um número. (Retorna um número)
let num2 = Number(window.prompt("Digite outro número: ")) // Cria outra variável local que atribui outro valor de um número. (Retorna um número)
let soma = num1 + num2 // Cria uma variável responsável por somar os números. (Retorna um número)
let subtracao = num1 - num2 // Cria uma variável responsável por subtrair os números. (Retorna um número)
let multiplicacao = num1 * num2	// Cria uma variável responsável por multiplicar os números. (Retorna um número)
let divisao = num1 / num2 // Cria uma variável responsável por dividir os números. (Retorna um número)

window.alert(`Exemplo de números ${num1} e ${num2}
Resultado:
${num1} + ${num2} = ${soma}
${num1} - ${num2} = ${subtracao}
${num1} * ${num2} = ${multiplicacao}
${num1} / ${num2} = ${divisao}
`) // Cria um alerta dizendo os seguintes números digitados e os resultados entre as operações deles. (Retorna uma string)