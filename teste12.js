/*Desenvolva um programa em JavaScript que utilize a variável diaSemana para determinar se um banco está aberto. 
Se o valor de diaSemana não for "sabado" e também não for "domingo", exiba a mensagem "Você pode ir ao banco". Caso contrário, se 
for sábado ou domingo, exiba a mensagem "O banco está fechado, tente outro dia". */


var diaSemana = 'sabado'

if(diaSemana != "sabado" && diaSemana != "domingo"){
    console.log("Você pode ir ao banco")
} else{
    console.log("O banco está fechado, tente outro dia")
}