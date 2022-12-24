
var parametro = prompt("Digite um número")

switch (parametro) {
    case 1:
        //se o paramentro === 1
        document.write("Parametro 1")
        break
    case 2:
        //se parametro === 2
        document.write("Parametro 2")
        break
    case "3":
        //se parametro === 2
        document.write("Parametro 3")
        break
    default:
        document.write("Default")
        //se parametro não encontrado
}