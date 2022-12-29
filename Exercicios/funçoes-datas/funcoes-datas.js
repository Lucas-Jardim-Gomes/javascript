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


