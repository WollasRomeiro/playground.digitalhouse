/*Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros da função maxmin 
e o segundo elemento é o maior dos parâmetros da função maxmin. */


function maxmin(a, b, c, d, e){

	array = [a, b, c, d, e];

	const minValue = Math.min(...array)
	const maxValue = Math.max(...array)
	
    return [minValue, maxValue]
}