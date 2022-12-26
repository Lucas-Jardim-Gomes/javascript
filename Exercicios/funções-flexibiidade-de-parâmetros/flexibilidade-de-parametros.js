function soma(a, b) {
    //b = b === undefined ? 0 : b
    return a + b
}
 console.log(soma(6, 6))
 console.log (soma(6, 6, 8, 9)) //desconsidera os parâmetros adicionais
 console.log(soma(6, ))
 console.log(soma())