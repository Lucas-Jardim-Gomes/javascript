
// Entrada de dados
var nome = prompt ("Digite seu nome: ")
var altura = prompt ("Digite a sua altura: ")
var peso = prompt ("Digite o seu peso: ")

// Conversão de dados
altura = parseFloat(altura)
peso = parseFloat(peso)

altura /= 100

var imc = peso / (altura * altura)

var classificacao = null


// Classificacões do imc
if(imc < 16){
    classificacao = "Baixo peso muito grave"
}
if(imc >= 16 && imc <= 16,99){
    classificacao = "Baixo peso grave"
}
if(imc >= 17 && imc <= 18,49){
    classificacao = "Baixo peso"
}
if(imc >= 18,50 && imc <= 24,99){
    classificacao = "Peso normal"
}
if(imc >= 25 && imc <= 29,99){
    classificacao = "Sobrepeso"
}
if(imc >= 30 && imc <34,99){
    classificacao = "Obesidade grau I"
}
if(imc >= 35 && imc <= 39,99){
    classificacao = "Obesidade grau II"
}if(imc >= 40){
    classificacao = "Obesidade grau III"
}

// Saida de dados
document.write(nome + "possui índice de massa corporal igual a " + imc + ", sendo classificado como " + classificacao)


