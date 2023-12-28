/*Desenvolva um programa em JavaScript que utilize um loop for para percorrer uma cartela de números e verificar se um número sorteado 
está presente nela. A cartela de números está armazenada na variável cartela, e o número sorteado é representado pela variável
numeroSorteado. Se o número sorteado estiver na cartela, exiba a mensagem "Encontrei o número!" e encerre o loop. */

var cartela = [8, 13, 18, 22, 42, 49];

var numeroSorteado = 42;

for(let i= 0; i < cartela.length; i++){
    if(cartela[i] == numeroSorteado){
        console.log("Encontrei o número!")
        break
    }
}