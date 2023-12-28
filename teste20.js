/*Elabore um programa em JavaScript que utilize um loop for para imprimir os números pares de 0 a 20. 
Utilize a instrução continue para pular para a próxima iteração quando o número for ímpar. */

for(var i=0; i<=20; ++i){
    if(i%2===0)
    console.log(i)
    continue
}