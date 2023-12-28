/*Elabore um programa em JavaScript que utilize um loop for para percorrer a lista de carros e exibir o nome de cada carro no console. 
A lista de carros é fornecida na variável listaDeCarros, contendo os carros "Fox", "Uno", "Gol", "Astra" e "Fiesta". */

var listaDeCarros = ["Fox", "Uno", "Gol", "Astra", "Fiesta"];

for(var i=0; i < listaDeCarros.length; i++){
    console.log("Nome do Carro: " + listaDeCarros[i])
}