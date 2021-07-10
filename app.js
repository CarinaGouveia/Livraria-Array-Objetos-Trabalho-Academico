const livros = require('./database')
const receber = require('readline-sync')
const entradaInicial = receber.question('Deseja buscar um livro? S/N : ')

if (entradaInicial.toLocaleUpperCase() === 'S')
{
    console.log("Esas são as categorias disponiveis:")
    console.log("Programação" , "/Economia", "/Software" , "/Piscologia")

    const entradaCategoria = receber.question("Qual categoria voce escolhe:")
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria )
    console.table(retorno)
}
else
{
    const livroaOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Todos os livros disponiveis:")
    console.table(livroaOrdenados)

}