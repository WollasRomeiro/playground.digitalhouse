/*Elabore um programa em JavaScript que utilize a variável ladosIguais para determinar o tipo de triângulo com base na 
quantidade de lados iguais. Se ladosIguais for igual a 3, exiba a mensagem "Equilátero". Se for igual a 2, exiba a mensagem "Isósceles". Caso contrário, se ladosIguais não for nem 3 nem 2, exiba a mensagem "Escaleno". */

var ladosIguais = 0

if (ladosIguais == 3){
    console.log("Equilátero")
} else if(ladosIguais == 2){
    console.log("Isósceles")
} else {
    console.log("Escaleno")
}