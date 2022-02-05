var display = document.getElementById('display');
var wind = document.getElementById('wind')

function press(x){
    display.value += x;
}

function del(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value)
}

function root(){
    display.value = Math.sqrt(display.value)
}

function square(){
    var y = wind.value
    display.value = Math.pow(display.value, y)
}

function per(){
var x = display.value
var y = wind.value
display.value = y * (x / 100)
}
