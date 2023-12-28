/*Desenvolva um programa em JavaScript que calcula a média de notas de trabalhos escolares. 
As notas dos trabalhos de um aluno nas disciplinas de História, Matemática, Ciência e Geografia são armazenadas nas variáveis
trabalhoDeHistoria, trabalhoDeMatematica, trabalhoDeCiencia e trabalhoDeGeografia, respectivamente. A quantidade total de trabalhos
é representada pela variável quantidadeDeTrabalhos.

Utilize essas informações para calcular a média geral das notas e exiba o resultado no console. Certifique-se de declarar todas 
as variáveis necessárias e inicializar a variável media corretamente. */


let trabalhoDeHistoria = 8.0

let trabalhoDeMatematica = 7.0

let trabalhoDeCiencia = 10

let trabalhoDeGeografia = 9.5

let quantidadeDeTrabalhos = 4

let media = (trabalhoDeHistoria + trabalhoDeMatematica + trabalhoDeCiencia + trabalhoDeGeografia) / quantidadeDeTrabalhos
    console.log(media)