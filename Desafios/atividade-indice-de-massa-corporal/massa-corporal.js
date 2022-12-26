
// Entrada de dados
var nome = prompt ("Digite seu nome: ")
var altura = prompt ("Digite a sua altura: ")
var peso = prompt ("Digite o seu peso: ")

// Conversão de dados
altura = parseFloat(altura)
peso = parseFloat(peso)

altura = altura / 100;

var imc = peso / (altura * altura);

imc = imc.toFixed(2)
var M = imc
var classificacao = ""


// Classificacões do imc

if(M < 16){
    classificacao = "Baixo peso muito grave"}
if(M >= 16 && M <= 16.99){
    classificacao = "Baixo peso grave"
}
if(M >= 17 && M <= 18.49){
    classificacao = "Baixo peso"
}
if(M >= 18.50 && M <= 24.99){
    classificacao = "Peso normal"
}
if(M >= 25 && M <= 29.99){
    classificacao = "Sobrepeso"
}
if(M >= 30 && M <34.99){
    classificacao = "Obesidade grau I"
}
if(M >= 35 && M <= 39.99){
    classificacao = "Obesidade grau II"
}if(M >= 40){
    classificacao = "Obesidade grau III"
}

// Saida de dados
document.write(nome + " possui índice de massa corporal igual a " + M + ", sendo classificado como " + classificacao)


