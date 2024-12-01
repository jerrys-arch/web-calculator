
const display = document.getElementById("display");
function appendToDisplay(value){
    display.value +=value;
}
    function calculateResult() {
        try {
            display.value = new Function('return ' + display.value)();
        } catch (e) {
            display.value = 'Error';
        }
    }
    

function clearDisplay(){
    display.value='';
}
function deleteLast(){
    display.value=display.value.slice(0,-1);
}
function calculatePercent() {
    try {
        if (display.value.includes('+') || display.value.includes('-') || display.value.includes('*') || display.value.includes('/')) {

            display.value = eval(display.value) / 100;
        } else {
            // Calculate percentage if it's just a number
            display.value = parseFloat(display.value) / 100;
        }
    } catch (e) {
        display.value = 'Error';
    }
}
