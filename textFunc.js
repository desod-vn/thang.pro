var loopName,i = 0;
var writeDown = setTimeout(writeDown, 1000);
var sayHello = document.getElementById('sub-hello');

function writeDown(){
    sayHello.innerHTML += '.';
    loopName = setInterval(loopName, 1000);
}

function loopName(){
    if(i < 3)
        sayHello.innerHTML += '.';
    i++;
    if(i == 3)
        sayHello.innerHTML = '"Tôi là một lập trình viên freelancer"';
    if(i == 7){
        sayHello.innerHTML = '"Hi vọng bạn sẽ ủng hộ cho tôi"';
        i = -1;
    }
}