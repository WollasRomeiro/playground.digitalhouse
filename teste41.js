/*Uma academia precisa separar grupos de pessoas tendo como base as suas alturas. 
Temos um array alunos que contem a altura de cada aluno da academia.
Temos outros 3 arrays: grupoA, grupoB e grupoC. Eles devem ser preenchidos da seguinte forma: 

grupoA - Alunos com altura entre 150 a 159
grupoB - Alunos com altura entre 160 a 169
grupoC - Alunos com altura de 170 ou mais

Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. 
Para esse exercício, você precisará usar loops, condicionais e funções de arrays. */


var alunos = [170, 159, 151, 187, 156, 191, 165, 154, 167, 169, 171, 170, 160]

var grupoA = [159, 151, 156, 154 ];

var grupoB = [165, 167, 169, 160 ];

var grupoC = [170, 187, 191, 171, 170 ];

function zumbaClass(alunos) {
    for (var i = 0; i < alunos.length; i++) {
        if (grupoA[i] > 150 && alunos[i] <= 159) {
            grupoA.push(alunos[i])
        } else if (grupoB[i] > 159 && alunos[i] < 170) {
            grupoB.push(alunos[i])
        } else if (grupoC[i] >= 170) {
            grupoC.push(alunos[i])
        }
    }
  }