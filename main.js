const num1 = parseInt(document.getElementById('num1').value);
const num2 = parseInt(document.getElementById('num2').value);

document.getElementById("inputs").addEventListener("submit", validateInputs);

function validateInputs() {
    let inputs = document.querySelector('inputs');
    let f = parseInt(inputs.getElementById('num1').value);
    let s = parseInt(inputs.getElementById('num2').value);

    if (f < 2 || s > 100) {
 
        result = "Number 1 input is not a valid number";

    }
    else if (f < 2 || s > 100) {
   
        result = "Number 2 input is not a valid number";

        
    }
    document.getElementById('calcResult').innerHTML=result;
}
