
const display = document.getElementById("display");
function appendToDisplay(value){
    display.value +=value;
}
function calculateResult(value){
    display.value=eval(display.value);
}
function clearDisplay(){
    display.value='';
}
function delete(){
    display.value=display.value.slice(0,)
}