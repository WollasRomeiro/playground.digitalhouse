/*Elabore um programa em JavaScript que utilize um loop for para percorrer um array representando uma lista de membros da família.
 O array está armazenado na variável familia. Se o nome for "Pedro", exiba o nome completo como "{Nome} Sousa", caso contrário, exiba 
 o nome completo como "{Nome} Macedo". */


var familia = ["Joana", "Felipe", "Gabriela", "Carlos", "Pedro", "Bruno"]

for (let i = 0 ; i < familia.length; i++){
    if(familia[i] == "Pedro") {
        console.log(familia[i] + " Sousa")
        continue
    }
    console.log(familia[i] + " Macedo")
}