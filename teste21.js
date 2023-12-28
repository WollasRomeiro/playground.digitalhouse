/*Desenvolva um programa em JavaScript que utilize um loop for para percorrer um array representando um baralho e verificar 
se o "Rei" está presente nele. O array do baralho está armazenado na variável baralho. Se o "Rei" estiver no baralho, exiba a 
mensagem "Encontrei o Rei!" e encerre o loop. */

var baralho = ["Ás", "Dama", "Rei", "Valete"];

for(let i = 0; i < baralho.length ; ++i){
    
    if(baralho[i] == "Rei"){
        console.log("Encontrei o Rei!")
        break
    }
}