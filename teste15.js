/*Crie um programa em JavaScript que calcula o lucro total com base em uma lista de valores. 
Você deve declarar uma variável chamada listaDeLucro contendo os seguintes valores: 100, 30, 300, -10, 600, 10. Em seguida, 
utilize um loop para percorrer cada elemento da lista e calcular o lucro total. O resultado final deve ser exibido no console. 
Certifique-se de inicializar uma variável chamada lucroTotal antes do loop para armazenar o resultado. 
Qual é o valor impresso no console ao final da execução do programa?*/

var listaDeLucro = [100, 30, 300, -10, 600, 10];

var lucroTotal = 0;

for (var i=0; i < listaDeLucro.length; i++){
    lucroTotal = lucroTotal + listaDeLucro[i]
}
    console.log(lucroTotal)