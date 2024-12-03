
const display = document.getElementById("display");
function appendToDisplay(value){
    display.value +=value;
}
    function calculateResult() {
        try {
           let result= display.value = new Function('return ' + display.value)();
           if (display.value.includes('/0')){
            display.value = 'can not divide by zero';
           }else if(result === Infinity || result === -Infinity){
            display.value = 'can not divide by zero';
           }else{
            display.value = result;
           }
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
            display.value = parseFloat(display.value) / 100;
        }
    } catch (e) {
        display.value = 'Error';
    }
}
