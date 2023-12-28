/*Desenvolva um programa em JavaScript que utilize a variável estrangeiro para determinar qual documento uma pessoa deve apresentar. 
Se a variável estrangeiro for true, exiba a mensagem "Você poderia apresentar seu RNE, por favor?". Caso contrário, se a variável for 
false, exiba a mensagem "Você poderia apresentar seu CPF, por favor?". */

let estrangeiro = true;

if (estrangeiro){
  console.log("Você poderia apresentar seu RNE, por favor?")
} else {
  console.log("Você poderia apresentar seu CPF, por favor?")
}