// 3 escopos: global, função e o bloco

var serie = "Friends"


//Escopo de bloco
if (true) {
    var serie2 = "Planeta selvagem"
    document.write(serie)
}

document.write (serie2)

document.write("<br>")

function x() {

    var serie3 = "One piece"
    document.write(serie)
    document.write(serie2)
}
x()

document.write (serie3)