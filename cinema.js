let filmes = require('./database/catalogo.json')
let cinema = 'Cinema Rua da Praia 4.5'

[
    {
        codigo: 4,
        titulo: 'Ex Machina',
        duracao: 120,
        atores: ['Domhnall Gleeson', 'Alicia Vikander', 'Oscar Isaac'],
        anoDeLancamento: 2015,
        bilheteria: 35.10,
        genero: 'ficçao',
        emCartaz: true
    },
    {
        codigo: 5,
        titulo: 'Interestelar',
        duracao: 300,
        atores: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Casey Affleck', 'Wes Bentley'],
        anoDeLancamento: 2014,
        bilheteria: 675.52,
        genero: 'ficçao',
        emCartaz: true
    }]

function buscarFilme(codigo) {
    const filmeEncontrado = filmes.find(function (filme) {
        return filme.codigo == codigo // retorno tem que ser booleano
    })

    return filmeEncontrado
}

const filmeEncontrado = buscarFilme(4)

function adicionarFilme(codigo, titulo, duracao, atores, anoDeLancamento, bilheteria, genero, emCartaz) {
    const filme = {
        codigo: codigo,
        titulo: titulo,
        duracao: duracao,
        atores: atores,
        anoDeLancamento: anoDeLancamento,
        bilheteria: bilheteria,
        genero: genero,
        emCartaz: emCartaz,
    }

    filmes.push(filme)
}
adicionarFilme(6, 'Harry Potter 5', 180, ' Daniel Radcliffe', 2023, 0, 'fantasia', false)

function alterarFilmeEmCartaz(codigo, encontrarFilme) {           // callback = encontar filmes
    const filmeEncontrado = encontrarFilme(codigo)               // callback = encontar filmes

    filmeEncontrado.emCartaz = filmeEncontrado.emCartaz ? false : true
}
// Forma mais didatica 

// if  (filmeEncontrado.emCartaz == true) {
//    filmeEncontrado.emCartaz = false
//  } else {
//     filmeEncontrado.emCartaz = true
//  } 

alterarFilmeEmCartaz(6, buscarFilme)

const imprimeFilme = (filme, index) => console.log(index + ' - ' + filme.titulo + ' - ' + filme.emCartaz)

function listarTodosOsFilmes() {
    filmes.forEach(imprimeFilme)
 }
listarTodosOsFilmes()

const filmesFiltrados = filmes.filter( filme => filme.genero == 'acao')    // Podemos usar qualquer parametro para uma lógica de filtragem 

console.table(filmesFiltrados)
// console.table(filmes)

//listarFilmesDeLongaDuracao

function listarFilmesDeLongaDuracao() {
    const resultado = filmes.filter(filme => filme.duracao >= 240)
    return resultado
}
const filmesDeLongaDuracao  = listarFilmesDeLongaDuracao()
console.table(filmesDeLongaDuracao)

// listarFilmesEmCartaz

const listarFilmesEmCartaz = () => filmes.filter(filme => filme.emCartaz) // Se for para buscar os filmes que não estão em cartaz usar o !filme.emCartaz
console.table(listarFilmesEmCartaz())