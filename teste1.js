/*Elabore um programa em JavaScript que utilize variáveis para armazenar o nome e a idade de uma pessoa. 
O nome da pessoa está armazenado na variável nome e a idade na variável idade. 
O programa deve exibir uma saudação personalizada utilizando o nome da pessoa no console. 
Além disso, verifique se a idade é maior que 18 anos e, em caso afirmativo, exiba a mensagem 
"Você passou no nosso teste e já pode dirigir!". */

let nome = "João"

let idade = 19
    console.log("Olá, " + nome)
if (idade > 18){
    console.log("Você passou no nosso teste e já pode dirigir!")
}