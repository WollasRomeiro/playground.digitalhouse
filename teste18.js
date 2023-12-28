/*Desenvolva um programa em JavaScript que utilize um loop for para contar o número de elementos negativos na lista de ganhos. 
A lista de ganhos está armazenada na variável listaDeGanhos. Após percorrer a lista, exiba a quantidade total de números negativos no 
console. */

var listaDeGanhos = [10, 30, -10, -5, -1, 40]

var totalNegativos = 0

for(var i = 0; i < listaDeGanhos.length; i++){  
    if(listaDeGanhos[i] < 0)
    totalNegativos++
}  
console.log(totalNegativos);