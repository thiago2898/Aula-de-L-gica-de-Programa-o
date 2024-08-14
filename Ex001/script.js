let nome = window.prompt("Olá, me diga seu primeiro nome por favor. ") // Cria uma variável local de nome "nome". (Retorna um número)
let sobrenome = window.prompt("Me diga seu sobrenome agora, por favor. ") // Cria uma variável local de nome "sobrenome". (Retorna um número)
let curso = window.prompt("Qual curso você está fazendo? ") // Cria uma variável local de nome "curso". (Retorna um número)
let nascimento = Number(window.prompt("Em que ano você nasceu? ")) // Cria uma variável local de nome "nascimento". (Retorna um número)

window.alert(`Olá, ${nome} ${sobrenome}
Então você estuda ${curso} e tem ${2024 - nascimento} anos.
`) // Cria uma mensagem de alerta dizendo as especificações do recruta. (Retorna uma string)