/*Desenvolva uma função em JavaScript chamada listarProdutos que utilize um loop for para percorrer e imprimir os elementos de um 
array de produtos. O array de produtos está definido dentro da função como lista. Ao chamar a função listarProdutos(), ela deve 
imprimir cada produto em uma nova linha no console. */

function listarProdutos(){
	var lista = [ 'Leite', 'tomate', 'Biscoito', 'Tapioca']

	for(var i = 0; i < lista.length; i++){	
	console.log(lista[i])
	}
}

listarProdutos()