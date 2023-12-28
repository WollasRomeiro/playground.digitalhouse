/*Desenvolva uma função em JavaScript chamada comecaComMaiuscula que recebe uma palavra como parâmetro e retorna true se ela 
começa com uma letra maiúscula e false caso contrário. Em seguida, utilize um loop for para percorrer o array palavras e exibir 
mensagens indicando se cada palavra começa ou não com maiúscula. */

function comecaComMaiuscula(palavra){
    return /^[A-Z]/.test(palavra);
 }

var palavras = ["Amor", "copo", "Bolacha", "biscoito"];

for(var i = 0; i < palavras.length; i++){
    if(comecaComMaiuscula(palavras[i])){
        console.log("Começa com maiúscula")
    }else{
        console.log("Não começa com maiúscula")
    }
}