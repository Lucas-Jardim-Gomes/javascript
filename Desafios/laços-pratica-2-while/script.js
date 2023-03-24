var y = 1
var x = 1
while( x <= 10) {
    y = 1;
        while( y <= 10){
            document.write(x + ' x ' +  y  + ' =  '  +  ( y * x) + '<br />')
            
    y++        
        }
    

    x++
    document.write('<hr/>')
}

/*
for( var y = 1; y <= 10; y++){
    for(var x = 1; x <= 10; x++){
        document.write(y + ' x ' + x + ' = ' + (y * x) + '<br/>')
    }
    document.write('<hr/>')
}

*/

/*
var x = 1

while(x <= 10){
    document.write(x + '<br />')

    if(x === 5){
        break
    }

    x++



    x++

    if(x === 5){
       continue
    }

    document.write(x + '<br />')

}
*/