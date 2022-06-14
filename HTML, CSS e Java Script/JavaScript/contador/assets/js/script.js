var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

function validaNum () {
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = "red";
    }else
        currentNumberWrapper.style.color = "black";
}

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    validaNum ();
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    validaNum();
}