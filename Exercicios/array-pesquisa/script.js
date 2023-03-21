var lista_frutas = []
    lista_frutas[0] = 'Maça'
    lista_frutas[1] = 'Banana'
    lista_frutas[2] = 'Uva'
    lista_frutas[3] = 'Morango'

    var pesquisa = lista_frutas.indexOf('Banana')

if (pesquisa === -1 ) {
    console.log("Elemento não existe")
} else {
    console.log("Elemento existe e está na posição " + pesquisa)
}