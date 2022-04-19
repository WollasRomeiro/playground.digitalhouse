function listarPersonagens() {
    var pessoas = [
        { nome: 'Josue' , papel: 'Peter Pan'},
        { nome: 'joselayne' , papel: 'wendy'},
        { nome: 'guilherme' , papel: 'Capitão gancho'},
        { nome: 'Luisa' , papel: 'Tinker Bell'},
    ];

    pessoas.forEach(pessoa => {
        console.log('Ator: ' + pessoa.nome);
        console.log('Papel: ' + pessoa.papel);
});

}
 listarPersonagens()