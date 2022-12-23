//true && true = true
/*
if( 2 == 2 && 3 >= 1) {
    document.write("Verdadeiro")
}
*/

/*
//true && true && false = false
if( 2 == 2 && 3 >= 1 && "a" == "b") {
    document.write("Verdadeiro")
} else {
    document.write("falso")
}
*/

/*
// true = false
if(!(2 == 1 )) {
    document.write("Verdadeiro")
} else {
    document.write("falso")
}
*/

var nota = prompt("Digite a nota do aluno:");
var faltas = prompt("Digite a quantidade de faltas:");


var media = 5;
var faltas_maximas = 15

if (nota >= media && faltas <= faltas_maximas) {
    document.write("Aprovado");
} else {
    document.write("Reprovado");
}