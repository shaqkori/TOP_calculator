

const display = document.getElementById("content");



var str,
element = document.getElementById('content');
if (element != null) {
    str = element.value;
}
else {
    console.log("null")
}


function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay(){
  display.value = ""
}

let expression = "";

function calculate(){
  try {
    // Use regex to split the expression into numbers and operators
    const tokens = expression.match(/[+\-*/]|\d+/g);

    if (!tokens || tokens.length === 0) {
      console.error('Invalid expression');
      display.value = 'Error';
      return;
    }

    // Perform calculations
    let result = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      switch (operator) {
        case '+':
          result += operand;
          break;
        case '-':
          result -= operand;
          break;
        case 'x':
          result *= operand;
          break;
        case '/':
          result /= operand;
          break;
        default:
          console.error('Invalid operator');
          break;
      }
    }

    display.value = result;
    expression = result.toString(); // Update expression with the result
  } catch (error) {
    display.value = 'Error';

  
    console.error(error);
  }
}




