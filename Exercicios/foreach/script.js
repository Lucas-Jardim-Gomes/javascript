//var listaFuncionarios = ['Paulo', 'Sandra', 'Lucas', 'Valtevaldo', 'Vitor']
var listaFuncionarios = Array()
    listaFuncionarios['x'] = 'Paulo'
    listaFuncionarios[false] = 'Sandra'
    listaFuncionarios[3] = 'Lucas'
    listaFuncionarios[27] = 'Valtevaldo'
    listaFuncionarios[-12] = 'Vitor'

var f = function(valor, indice){
    console.log(valor, indice)
}

listaFuncionarios.forEach(f)

/*
console.log(listaFuncionarios)
document.write(listaFuncionarios[2])

listaFuncionarios.forEach(function(valor, indice, array){
    //listaFuncionarios.forEach(function(valor, indice, array){})
    //lógica   
    console.log('indice: ' + indice + ' | valor: ' + valor)    
     
        if(valor == 'Lucas') {
            array[indice] = 'Um novo valor'
        }
})

console.log(listaFuncionarios)    
document.write('<br/>' + listaFuncionarios[2])
*/