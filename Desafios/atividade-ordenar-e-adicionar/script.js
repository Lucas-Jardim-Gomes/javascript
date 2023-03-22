function valorRecuperado(){
    var caracter = (document.getElementById("entrada").value)

    caracter.trim()


     if (caracter === ""){
        alert("Informe um valor valido")
     } if  (objetos.indexOf(objeto) !== -1){
        alert("Objeto já foi adicionado")
     } else if (objetos) {
            objetos.push("Mesa");
          
     } 
}

//lista_coisas['objetos'].push('Mesa')

 var objetos = Array()
        objetos[0] = 'Cadeira'
        objetos[1] = 'Impressora'
        objetos[2] = 'Garfo'

console.log(objetos)