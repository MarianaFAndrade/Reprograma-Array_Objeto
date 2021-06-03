const livros = require('./database');

// const listaOrdenada = livros.sort((a,b) => {
//     return a.pagina - b.pagina
// })
livros.sort(function (a, b) {
	
	return (a.pagina > b.pagina) ? 1 : ((b.pagina > a.pagina) ? -1 : 0);
 
});


const pegarEntrada = require('readline-sync');


const descobrirLivros = pegarEntrada.question('Deseja encontrar livros pela categoria?  (S/N)');

if (descobrirLivros.toLocaleUpperCase() === 'S'){
    console.log('Esses são as categorias listadas:');
    console.log('Romance', 'Aventura', 'Ciencias Sociais', 'Historia', 'Infantil', 'Computacao', 'Ficcao', 'Poesia');

    const qualCategoria = pegarEntrada.question('Qual categoria voce escolhe?');

    const categoria = livros.filter(livro => livro.categoria === qualCategoria);

    console.table(categoria);
    
} else{
    console.log('Essas sao todas as categorias de livros:  ');
    console.table(livros);
}



const recomendacao = pegarEntrada.question('Deseja recomendação de livros para ler?  (S/N)');

if (recomendacao.toLocaleUpperCase() === 'S'){
    console.log('Essas são as recomendações: ');

    const recomenda = livros.filter(livro => livro.recomenda === true);

    console.table(recomenda);
    
} else{
    
}



const desejo = pegarEntrada.question('Deseja ver a lista de desejos?  (S/N)');

if (desejo.toLocaleUpperCase() === 'S'){
    console.log('Essa é a lista de desejos: ');

    const deseja = livros.filter(livro => livro.leu === false);

    console.table(deseja);
    
} else{
    
}



