function NumbersBetween (a, b) {
    let i = a + 1;
    let intervalid = setInterval (function(){
        console.log(i)
        if (i == (b - 1)) {
            clearInterval (intervalid)
        }
        i++;
     }, 1000)
}

NumbersBetween (5, 16)
    
