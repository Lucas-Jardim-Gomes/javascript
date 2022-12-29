
/*
var data = new Date()

data.getDate()


document.write(data.getDate() + "/" + (data.getMonth() + 1) + "/" + (data.getFullYear()))
document.write("<br>")
document.write(data.getSeconds())
document.write("<hr>")


//adicinar / remover dias
document.write(data.toString())
data.setDate(data.getDate() + 3)
document.write("<hr>")
document.write(data.toString())

document.write("<hr>" + "<br>")

//adicinar / remover meses
document.write(data.toString())
document.write("<hr>")
data.setMonth(data.getMonth() + 1)
document.write(data.toString())

document.write("<hr>" + "<br>")

//adicinar / remover ans
document.write(data.toString())
document.write("<hr>")
data.setFullYear(data.getFullYear() + 1)
document.write(data.toString())
*/

//  29/12/2022
var data1 = new Date(2022, 11, 29)

//  03/01/2023
var data2 = new Date(2023, 0, 03)

document.write(data1.toString())
document.write("<br>")
document.write(data2.toString())


document.write("<hr>" + "<br>")
//converter datas para algo que possamos calcular
document.write(data1.getTime())
document.write("<br>")
document.write(data2.getTime())
document.write("<br>")

//1 de janeiro de 1970

//encontrar a quantidade de milissegundos entre data1 e data2


var milissegundosEntreDatas = data2.getTime() - data1.getTime()
document.write(milissegundosEntreDatas)


/*
1 dia tem 24 horas, cada hora tem 60 minutos, cada segundo tem 1000 milissegundos

pergunta: então quantos mlissegundos existem em um dia?
*/
var milissegundosPorDia = (1*24*60*60*1000)
document.write("<br>")
document.write("1 dia tem: " + milissegundosPorDia + " milissegundos")

document.write("<br>")
document.write(milissegundosEntreDatas / milissegundosPorDia)






