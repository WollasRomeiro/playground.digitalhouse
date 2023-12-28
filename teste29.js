/*Desenvolva uma função em JavaScript chamada calculaValorDevido que recebe o parâmetro pesoDeRoupaSuja e retorna o valor a ser pago 
por esse peso, considerando que o preço por quilo é R$ 3 e há uma taxa fixa de R$ 10.*/

function calculaValorDevido(pesoDeRoupaSuja){
    var preco = pesoDeRoupaSuja*3
    preco+=10
    return preco
}
