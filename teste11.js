/*Elabore um programa em JavaScript que utilize as variáveis produtoQtd e produtoAtivo para determinar se um produto está disponível
 para compra. Se a quantidade de produtos for maior que 0 e o produto estiver ativo (representado por produtoAtivo sendo verdadeiro),
  exiba a mensagem "Você pode finalizar essa compra". Caso contrário, se a quantidade de produtos for igual a 0 ou o produto não 
  estiver ativo, exiba a mensagem "Produto não está disponível para compra". */

var produtoQtd = 3

var produtoAtivo = true
if(produtoQtd > 0 && produtoAtivo){
    console.log("Você pode finalizar essa compra")
}else{
    console.log("Produto não está disponível para compra")
}