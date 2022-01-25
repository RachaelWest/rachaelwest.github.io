// Helper functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculate() {
    let first_num = Number(document.getElementById("first-num").value);
    let second_num = Number(document.getElementById("second-num").value);
    let display = document.getElementById("result");
    let result = 0;

    let symbol = document.querySelector('input[name="math-symbol"]:checked');

    if (symbol !== null) {

        switch (symbol.value) {
            case 'add':
                result = add(first_num, second_num)
                break;
            case 'subtract':
                result = subtract(first_num, second_num)
                break;
            case 'multiply':
                result = multiply(first_num, second_num)
                break;
            case 'divide':
                result = divide(first_num, second_num)
                break;
            default:
                result = "Not a valid math Symbol. Please try again.";
        }
        display.innerHTML = "Result : " + String(result);
    } else {
        display.innerHTML = "No mode was set";
    }
}


/*OLD VERSION
function calculate() {
    var first_num = Number(document.getElementById("first-num").value);
    var second_num = Number(document.getElementById("second-num").value);
    var result = 0;

    if (document.getElementById("add").checked) {
        result = first_num + second_num;
    }
    else if (document.getElementById("subtract").checked) {
        result = first_num - second_num;
    }
    else if (document.getElementById("multiply").checked) {
        result = first_num * second_num;
    }
    else if (document.getElementById("divide").checked) {
        result = first_num / second_num;     
    }

    document.getElementById("result").innerHTML = "Result : " + String(result);
}
*/