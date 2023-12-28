/*Desenvolva um programa em JavaScript que utilize um loop for para verificar se uma determinada fruta está disponível na lista de frutas.
 A lista de frutas está armazenada na variável listaDeFrutas, e a fruta que você deseja buscar é representada pela variável busca. 
 Se a fruta estiver na lista, exiba a mensagem "Sim, temos {fruta} disponível". */

var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];

var busca = "Cajá";

for(var i=0; i < listaDeFrutas.length; i++){
    if(listaDeFrutas[i] == busca)
    console.log("Sim, temos " +  busca  + " disponível")
};