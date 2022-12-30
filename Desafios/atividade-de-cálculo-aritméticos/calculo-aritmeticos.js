var num1 = prompt("Digite um numero: ")
var operacao = prompt("Escreva soma ou subtração para prosseguir com a operação")
var num2 = prompt("Digite um numero: ")


function calculo (num1, operacao , num2){
    num1 = parseFloat (num1)
    num2 = parseFloat (num2)

    var resultado = null

    if(operacao == "soma"){
        resultado = num1 + num2
    }
    if(operacao == "subtração"){
        resultado = num1 - num2
    }
    
    return resultado;
}


document.write("O resultado é: " + calculo (num1, operacao , num2))
