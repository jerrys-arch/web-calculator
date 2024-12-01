
const display = document.getElementById("display");
function appendToDisplay(value){
    display.value +=value;
}
function calculateResult(value){
    function calculateResult() {
        try {
            display.value = new Function('return ' + display.value)();
        } catch (e) {
            display.value = 'Error';
        }
    }
    
}
function clearDisplay(){
    display.value='';
}
function deleteLast(){
    display.value=display.value.slice(0,-1);
}
function calculatePercent(value){
   display.value=display.value/100;
}
