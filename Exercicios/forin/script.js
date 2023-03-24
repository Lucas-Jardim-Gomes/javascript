//var listaConvidados = ['Lucas', 'Fabio' , 'Isamara' , 'Danilo', 'Talita']

var listaConvidados = Array()
    listaConvidados['a'] = 'Lucas'
    listaConvidados[10] = 'Fabio'
    listaConvidados['zebra'] = 'Isamara'
    listaConvidados[-1] = 'Danilo'
    listaConvidados[true] = 'Talita'

console.log(listaConvidados)
    for(var x in listaConvidados) {
console.log( 'Indice ' + x + ' Valor '  + listaConvidados[x])
    }