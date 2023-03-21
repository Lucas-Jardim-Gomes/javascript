/* var lista_frutas = Array()

    lista_frutas[0] = 'Banana'
    lista_frutas[1] = 'Abacate'
    lista_frutas[2] = 'Uva'
    lista_frutas[3] = 'Laranja'
    lista_frutas[4] = 'Ameixa'

    console.log(lista_frutas.sort())

*/

var lista_numeros = []

    lista_numeros[0] = 12
    lista_numeros[1] = 3
    lista_numeros[2] = 25
    lista_numeros[3] = 385
    lista_numeros[4] = 474

    console.log(lista_numeros.sort(ordenaNumeros))

function ordenaNumeros(x,y){
    return x - y
    // < 0 = x ordenado antes de y
    // > 0 = y ordenado antes de x
    //  == a ordem é mantida
}