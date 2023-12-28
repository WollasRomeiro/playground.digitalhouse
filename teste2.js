/*Crie um programa em JavaScript que utilize a variável saldo para verificar o estado financeiro de uma pessoa. 
O saldo é inicializado com o valor 0. O programa deve conter estruturas de controle de fluxo para exibir mensagens 
diferentes no console, dependendo se o saldo é positivo ou negativo. Se o saldo for maior que 0, deve exibir a mensagem 
"Seu saldo está positivo! Gostaria de fazer um investimento?". Caso contrário, se o saldo for menor ou igual a 0, deve exibir
 a mensagem "Seu saldo está negativo! Gostaria de fazer um empréstimo?". */

var saldo = 0

if (saldo > 0){
    console.log('Seu saldo está positivo! Gostaria de fazer um investimento?')
}
if (saldo <= 0){
    console.log('Seu saldo está negativo! Gostaria de fazer um empréstimo?')
}