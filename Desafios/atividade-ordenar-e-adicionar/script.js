function valorRecuperado(){
    var caracter = (document.getElementById("entrada").value)

    caracter.trim()


     if (caracter = ""){
        alert("Informe um valor valido")
     } if (caracter = objetos[""]) {
        alert("Objeto já foi adicionado")
     } else if (caracter != objetos) {
        objetos.push(caracter)
     } 
}

//lista_coisas['objetos'].push('Mesa')

 var objetos = Array()
        objetos[0] = 'Cadeira'
        objetos[1] = 'Impressora'
        objetos[2] = 'Garfo'