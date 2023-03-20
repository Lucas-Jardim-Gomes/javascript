var lista_frutas = []
    lista_frutas[0] = 'Maça'
    lista_frutas[1] = 'Banana'
    lista_frutas[2] = 'Uva'
    lista_frutas[3] = 'Morango'

if (lista_frutas.indexOf('Banana') === -1 ) {
    console.log("Elemento não existe")
} else {
    console.log("Elemento existe e está na posição " + lista_frutas.indexOf('Banana'))
}