var idade = prompt("Digite a sua idade:");



if (idade >= 0 && idade < 15) {
    alert('Criança');
}
if (idade >= 15 && idade < 30) {
    alert("Jovem");
}
if (idade >= 30 && idade < 60) {
    alert("adulto");
}
if (idade >= 60) {
    alert("idoso");
}

/*
Exemplo utilizando ifs encadeados (o resultado será o mesmo):
var idade = prompt('Digite a idade');

if(idade >= 0 && idade < 15){
 alert('Criança');

} else if(idade >= 15 && idade < 30){
 alert('Jovem');

} else if(idade >= 30 && idade < 60){
 alert('Adulto');

} else {
 alert('Idoso');
}
*/

/*
var nota = prompt("Digite a nota do aluno:");
var faltas = prompt("Digite a quantidade de faltas:");


var media = 5;
var faltas_maximas = 15

if (nota >= media && faltas <= faltas_maximas) {
    document.write("Aprovado");
} else {
    document.write("Reprovado");
}
*/