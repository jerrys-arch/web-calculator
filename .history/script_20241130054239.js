
const display = document.getElementById("display");
function appendToDisplay(value){
    display.value +=value;
}
function calculateResult(value){
    display.value=eval(display.value);
}
function clearDisplay(value){
    display.value=
}