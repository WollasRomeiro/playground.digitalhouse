/*Desenvolva um programa em JavaScript que utilize as variáveis usuarioAltura e usuarioIdade para determinar se uma pessoa atende 
aos requisitos para usar um brinquedo em um parque de diversões. Se a altura do usuário for maior que 150 centímetros ou a idade
 for maior ou igual a 21 anos, exiba a mensagem "Você pode subir". Caso contrário, se a altura for menor ou igual a 150 centímetros e 
 a idade for menor que 21 anos, exiba a mensagem "Desculpe, você não atende os requisitos para usar o brinquedo". */

var usuarioAltura = 170

var usuarioIdade = 21
if (usuarioAltura > 150 || usuarioIdade >= 21){
    console.log("Você pode subir")
} else {
    console.log("Desculpe, você não atende os requisitos para usar o brinquedo")
}