/*Desenvolva um programa em JavaScript que utilize a variável petPeso para determinar se um animal de estimação está abaixo do peso, 
acima do peso ou dentro da faixa de peso normal. Se o peso for inferior a 4, exiba a mensagem "Abaixo do Peso". 
Se o peso for superior a 10, exiba a mensagem "Acima do Peso". Caso contrário, se o peso estiver entre 4 e 10 (inclusive),
 exiba a mensagem "Peso normal". */
 
var petPeso = 7

if(petPeso < 4){
    console.log("Abaixo do Peso")
} else if(petPeso > 10){
    console.log("Acima do Peso")
} else{
    console.log("Peso normal")
}